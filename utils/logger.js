import winston from 'winston';
import path from 'path';
import moment from 'moment-timezone';
import fs from 'fs';
import { fileURLToPath } from 'url';

/* ---------------- ESM __dirname fix ---------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ---------------- Create logging directory ---------------- */
const loggingDir = path.resolve(__dirname, '../logging');

if (!fs.existsSync(loggingDir)) {
  fs.mkdirSync(loggingDir, { recursive: true });
}

/* ---------------- Timezone ---------------- */
const timeZone = 'America/New_York';

/* ---------------- Log format ---------------- */
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}] ${message}`;
});

/* ---------------- Logger ---------------- */
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: () => moment().tz(timeZone).format('YYYY-MM-DD HH:mm:ss')
    }),
    customFormat
  ),
  transports: [
    new winston.transports.Console({ level: 'debug' }),

    new winston.transports.File({
      filename: path.join(loggingDir, 'test_run.log'),
      maxFiles: 5,
      maxsize: 300 * 1024,
      level: 'info'
    }),

    new winston.transports.File({
      filename: path.join(loggingDir, 'test_error.log'),
      maxFiles: 5,
      maxsize: 10 * 1024,
      level: 'error'
    })
  ]
});

export default logger;