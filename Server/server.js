import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

// Environment Variables
const PORT = process.env.PORT;

// Connect to Mongo Data Base
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parse middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running....");
});

// User route
app.use("/api/users", userRoutes);

// Custom Error Message
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Serving running on PORT: ${PORT}`));
