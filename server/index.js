import express from "express";
import pool from "./db/db.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

app.get((req, res) => {
  res.send(`Qitab server is running!`);
});

app.get("/", (req, res) => {
  res.send("Qitab API is working ✅");
});

app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ time: result.rows[0].now });
  } catch (error) {
    console.error("DB connection failed:", error);
    res.status(500).json({ error: "Database test failed" });
  }
});
app.listen(PORT, () => {
  console.log(`🚀 Qitab server listening on http://localhost:${PORT}`);
});
