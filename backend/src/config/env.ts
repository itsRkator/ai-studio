import dotenv from 'dotenv';

dotenv.config();

export const config = {
  // Server
  port: Number.parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  apiPrefix: process.env.API_PREFIX || '/api',
  apiVersion: process.env.API_VERSION || 'v1',

  // Database
  databaseUrl:
    process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/ai_studio',

  // JWT
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',

  // File Upload
  maxFileSize: Number.parseInt(process.env.MAX_FILE_SIZE || '10485760', 10), // 10MB default
  uploadDir: process.env.UPLOAD_DIR || './uploads',

  // CORS
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
} as const;

// Validate required environment variables
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET'];

if (config.nodeEnv === 'production') {
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}
