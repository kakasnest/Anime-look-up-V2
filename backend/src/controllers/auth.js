import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import { TOKEN_SECRET } from "../middlewares/authMW.js";

export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (user) {
      res.status(500).json({ message: "Username already in use" });
    } else {
      const hashed = await bcrypt.hash(password, 10);
      const created = await User.create({ username, password: hashed });
      res.status(201).json({ message: "Registration complete" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }).select("+password");

    if (!user) {
      res
        .status(500)
        .json({ message: "There isn't a user with such a username" });
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        res.status(500).json({ message: "Wrong password" });
      } else {
        const token = jwt.sign({ userId: user._id }, TOKEN_SECRET, {
          expiresIn: "7d",
        });
        res.cookie("auth", token, { httpOnly: true });
        res.status(202).json({ message: "Login successful" });
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
