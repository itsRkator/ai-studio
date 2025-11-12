import express from 'express';
import cors from 'cors';
import v1Routes from './routes/v1/index.js';
import { config } from './config/env.js';
import { initializeDatabase, closeDatabase } from './config/database.js';

const app = express();

// Middleware
app.use(
  cors({
    origin: config.corsOrigin,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route (outside API prefix)
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'AI Studio API is running' });
});

// API routes with versioning
app.use(`${config.apiPrefix}/${config.apiVersion}`, v1Routes);

// Initialize database and start server
const startServer = async () => {
  try {
    // Initialize database connection
    await initializeDatabase();

    // Start server
    app.listen(config.port, () => {
      console.log(`🚀 Server running on http://localhost:${config.port}`);
      console.log(
        `📡 API available at http://localhost:${config.port}${config.apiPrefix}/${config.apiVersion}`
      );
      console.log(`🌍 Environment: ${config.nodeEnv}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully...');
  await closeDatabase();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully...');
  await closeDatabase();
  process.exit(0);
});

startServer();

export default app;
