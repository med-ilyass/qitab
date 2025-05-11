import express from "express";
import pool from "../db/db.js";
import cors from "cors";
import dotenv from "dotenv";

console.log("🔥 This is the file you are editing");
dotenv.config();
const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

app.get("/api/books", (req, res) => {
  res.json([
    { id: 1, title: "Test Book A", author: "Author A" },
    { id: 2, title: "Test Book B", author: "Author B" }
  ]);
});

// app.get("/api/books", async (req, res) => {
//   try {
//     res.json([
//       { id: 1, title: "Test Book A" },
//       { id: 2, title: "Test Book B" },
//     ]);
//     // const result = await pool.query("SELECT * FROM books;");
//     // res.json(result.rows);
//   } catch (error) {
//     console.error("DB connection failed:", error);
//     res.status(500).json({ error: "Database test failed" });
//   }
// });

app.listen(PORT, () => {
  console.log(`🚀 Qitab server running at http://localhost:${PORT}`);
});