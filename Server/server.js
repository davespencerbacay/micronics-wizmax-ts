import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// Environment Variables
const PORT = process.env.PORT;

// Connect to Mongo Data Base
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});

// User route
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Serving running on PORT: ${PORT}`));
