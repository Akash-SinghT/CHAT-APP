import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./models/db.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoutes);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is listening");
  connectDB();
});
