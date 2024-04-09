import express from "express";
import { connectDB } from "./DB/connection.js";
const port = process.env.PORT || 3000;
const app = express();
connectDB();
app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
})