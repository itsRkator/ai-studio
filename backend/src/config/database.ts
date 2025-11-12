import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from './env.js';

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: config.databaseUrl,
  synchronize: config.nodeEnv === 'development', // Auto-sync schema in dev only
  logging: config.nodeEnv === 'development',
  entities: ['src/models/**/*.entity.{ts,js}'],
  migrations: ['src/migrations/**/*.{ts,js}'],
  subscribers: ['src/subscribers/**/*.{ts,js}'],
};

export const AppDataSource = new DataSource(dataSourceOptions);

// Initialize database connection
export const initializeDatabase = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Error connecting to database:', error);
    throw error;
  }
};

// Close database connection
export const closeDatabase = async (): Promise<void> => {
  try {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
      console.log('✅ Database connection closed');
    }
  } catch (error) {
    console.error('❌ Error closing database connection:', error);
    throw error;
  }
};

// Get the data source instance
export const getDataSource = (): DataSource => {
  if (!AppDataSource.isInitialized) {
    throw new Error('Database not initialized. Call initializeDatabase() first.');
  }
  return AppDataSource;
};
