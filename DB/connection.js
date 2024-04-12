import mongoose from "mongoose";

export const connectDB = async (req, res, next) => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("db connected!");
  } catch (err) {
    console.log("db failed to connect!", err);
  }
};
