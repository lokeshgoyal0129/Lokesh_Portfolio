import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { chatWithAgent } from './controllers/chatController';
import { submitContact } from './controllers/contactController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS to allow Next.js dev and production requests
app.use(cors({
  origin: '*', // For local development. Can be restricted to specific domains in production
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// API endpoints
app.post('/api/chat', chatWithAgent);
app.post('/api/contact', submitContact);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development',
    databaseConnected: !!process.env.DATABASE_URL,
    geminiConfigured: !!process.env.GEMINI_API_KEY
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
