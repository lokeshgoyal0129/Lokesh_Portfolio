import { Request, Response } from 'express';
import pool from '../config/db';
import fs from 'fs';
import path from 'path';

// Helper to log contact submission to a local JSON file as a fallback
const saveToLocalFile = (contact: { name: string; email: string; message: string; date: string }) => {
  const filePath = path.join(__dirname, '../../contacts_log.json');
  let contacts = [];

  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      contacts = JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading contact log file:', err);
  }

  contacts.push(contact);

  try {
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2), 'utf8');
    console.log(`Saved contact query locally to ${filePath}`);
  } catch (err) {
    console.error('Error writing contact log file:', err);
  }
};

export const submitContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const dateStr = new Date().toISOString();

    // If PostgreSQL pool is available, try to store in database
    if (pool) {
      try {
        // Ensure table exists
        await pool.query(`
          CREATE TABLE IF NOT EXISTS contacts (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          );
        `);

        // Insert contact
        const query = 'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, email, message];
        const result = await pool.query(query, values);
        
        console.log('Successfully saved contact to PostgreSQL:', result.rows[0]);
        return res.status(201).json({
          success: true,
          message: 'Message saved successfully in database.',
          data: result.rows[0],
        });
      } catch (dbError) {
        console.error('Failed to save to PostgreSQL. Falling back to local file storage.', dbError);
        saveToLocalFile({ name, email, message, date: dateStr });
        return res.status(201).json({
          success: true,
          message: 'Message saved locally (database fallback active).',
          data: { name, email, message, created_at: dateStr },
        });
      }
    } else {
      // Fallback mode: save locally to contacts_log.json
      saveToLocalFile({ name, email, message, date: dateStr });
      return res.status(201).json({
        success: true,
        message: 'Message logged locally (database not configured).',
        data: { name, email, message, created_at: dateStr },
      });
    }
  } catch (error) {
    console.error('Error in submitContact controller:', error);
    return res.status(500).json({ error: 'Internal server error while processing your message.' });
  }
};
