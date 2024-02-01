const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const rootPath = path.resolve(__dirname, "..");

const config = {
  rootPath,
  secretKey: process.env.SECRET_KEY,
  serviceName: process.env.SERVICE_NAME,
  dbHOST: process.env.DB_HOST,
  dbPORT: process.env.DB_PORT,
  dbUSER: process.env.DB_USER,
  dbPASS: process.env.DB_PASS,
  dbNAME: process.env.DB_NAME,
};
mongoose.connect(`mongodb://${config.dbPORT}/crud`);
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Terhubung ke basis data MongoDB");
});

(module.exports = db), config;
