import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cors from "cors";

// Connect to Mongo Data Base
connectDB();

// Environment Variables
const PORT = process.env.PORT;

const app = express();

// CORS
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parse middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running....");
});

// User route
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Custom Error Message
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Serving running on PORT: ${PORT}`));
