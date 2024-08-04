import dotenv from "dotenv";

dotenv.config();

export const config = {
    PORT: process.env.port,
    SUBMISSION_SERVICE_URL: process.env.submission_service_url,
    DELIVERY_SERVICE_URL: process.env.deliver_service_url,
    SECRET_KEY: process.env.secret_key
};
