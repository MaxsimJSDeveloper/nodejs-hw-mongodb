import { env } from '../utils/env.js';
import path from 'node:path';

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;

export const SMTP = {
  SMTP_HOST: env('SMTP_HOST'),
  SMTP_PORT: env('SMTP_PORT'),
  SMTP_USER: env('SMTP_USER'),
  SMTP_PASSWORD: env('SMTP_PASSWORD'),
  SMTP_FROM: env('SMTP_FROM'),
};
