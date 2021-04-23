import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      index: true,
      required: true,
      trim: true,
    },
    password: { type: String, select: false },
    registeredAt: { type: Date, default: Date.now, select: false },
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("User", userSchema);

export default User;
