import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 3000),
  host: process.env.HOST ?? '0.0.0.0',
  jwtSecret: process.env.JWT_SECRET ?? 'development-secret',
  jwtExpiry: process.env.JWT_EXPIRY ?? '1h',
  refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY ?? '7d',
  aiServiceUrl: process.env.AI_SERVICE_URL ?? 'http://localhost:5000',
  logLevel: process.env.LOG_LEVEL ?? 'info',
  corsOrigin: (process.env.CORS_ORIGIN ?? 'http://localhost:3000').split(',').map((value) => value.trim()),
};
