import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import { TOKEN_SECRET } from "../middlewares/authMW.js";

export const register = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user) {
    next("User exists");
  } else {
    const hashed = await bcrypt.hash(password, 10);
    const createdUser = await User.create({ username, password: hashed });
    res.status(201).json({ id: createdUser._id });
  }
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).select("+password");

  if (!user) {
    next("No such user");
  } else {
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      next("Wrong password");
    } else {
      const token = jwt.sign({ userId: user._id }, TOKEN_SECRET, {
        expiresIn: "7d",
      });
      res.cookie("auth", token, { httpOnly: true });
      res.status(200).json({ Message: "Login successful" });
    }
  }
};
