import User from "../models/User.js";

export const getUserData = async (req, res) => {
  try {
    const user = await User.find({ _id: req.user });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
