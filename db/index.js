const express = require("express");
const cors = require("cors");
const knex = require("knex");
const config = require("./knexfile");

const app = express();
const db = knex(config.development);

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Test DB connection
app.get("/test-db", async (req, res) => {
  try {
    await db.raw("SELECT 1");
    res.send("Database connected ✅");
  } catch (err) {
    console.error(err);
    res.status(500).send("DB Error");
  }
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
