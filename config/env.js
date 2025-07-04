import { config } from "dotenv";

// eslint-disable-next-line no-undef
config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

export const {
    PORT, SERVER_URL,
    NODE_ENV,
    DB_URI,
    JWT_SECRET, JWT_EXPIRES_IN,
    ARCJET_ENV, ARCJET_KEY,
    QSTASH_TOKEN, QSTASH_URL,
    EMAIL_PASSWORD
// eslint-disable-next-line no-undef
}  = process.env;