import express from "express"
import dotenv from "dotenv";
import { connection } from "./helpers/database.js"
const app = express()
dotenv.config()

const PORT = process.env.MY_PORT
import cors from "cors";
app.use(express.json());
app.use(cors());
app.get("/api/test-db", async (req, res) => {
    try {
        const conn = await connection;
        const [rows] = await conn.query("SELECT * FROM users");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
connection
    .then(() => {
        console.log("✅ Database connected!");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
            console.log(`API available at: http://localhost:${PORT}/api`);
        });
    })