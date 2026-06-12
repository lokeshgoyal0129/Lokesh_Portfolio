import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let pool: Pool | null = null;

const dbUrl = process.env.DATABASE_URL;

if (dbUrl) {
  try {
    pool = new Pool({
      connectionString: dbUrl,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    });
    console.log('PostgreSQL connection pool initialized.');
  } catch (error) {
    console.error('Error creating PostgreSQL pool:', error);
  }
} else {
  console.warn('DATABASE_URL is not set. Database integrations will operate in local fallback mode (file logging).');
}

export default pool;
