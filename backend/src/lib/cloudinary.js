import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load env from backend/.env (default) and fall back to repo root .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config({ path: path.resolve(__dirname, "../../.env") });
config(); // also load from current working directory if present

const required = ["CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET"];
const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.warn(`Cloudinary env vars missing: ${missing.join(", ")}`);
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;