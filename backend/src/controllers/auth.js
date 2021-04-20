import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import { TOKEN_SECRET } from "../middlewares/authMW.js";

export const register = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user) {
    res.status(200).json({ message: "Username already in use" });
  } else {
    const hashed = await bcrypt.hash(password, 10);
    User.create({ username, password: hashed }).then(
      res.status(201).json({ message: "success" })
    );
  }
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).select("+password");

  if (!user) {
    res.status(200).json({ message: "No such user" });
  } else {
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(200).json({ message: "Wrong password" });
    } else {
      const token = jwt.sign({ userId: user._id }, TOKEN_SECRET, {
        expiresIn: "7d",
      });
      res.cookie("auth", token, { httpOnly: true });
      res.status(202).json({ message: "success" });
    }
  }
};
