import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import { errorHandler } from "./middlewares/handleError.middleware.js";

dotenv.config()
const PORT = process.env.MY_PORT || 3000
const app = express()
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API available at: http://localhost:${PORT}/api`);
});


