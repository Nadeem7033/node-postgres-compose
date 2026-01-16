const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(`DB Connected! Time: ${result.rows[0].now}`);
  } catch (err) {
    res.send("DB connection failed");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
