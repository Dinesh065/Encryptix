import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});
import connectDB from "./utils/dbmongo.js";

const app = express();

// app.get("/home",(req,res) => {
//     return res.status(200).json({
//         message: "I am coming from backend",
//         success: true
//     })
// })

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, 
};
app.use(cors(corsOptions));

// Server setup
const port = process.env.PORT || 5000; 
app.listen(port, () => {
    connectDB();
  console.log(`Example app listening on port ${port}`);
});
