import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  picture: {
    url: {
      type: String,
      default:
        "https://res.cloudinary.com/dwsiotrat/image/upload/v1712946628/Saraha/hoc1fybwkprdbia3gz7w.png",
    },
    id: {
      type: String,
      default: "Saraha/hoc1fybwkprdbia3gz7w",
    },
  },
});

export const User = model("User", userSchema);
