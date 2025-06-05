import { config } from "dotenv";

// eslint-disable-next-line no-undef
config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

export const {
    PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET, JWT_EXPIRE_IN
    ARCJET_ENV, ARCJET_KEY
// eslint-disable-next-line no-undef
}  = process.env;