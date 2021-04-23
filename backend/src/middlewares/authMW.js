import jwt from "jsonwebtoken";

export const TOKEN_SECRET = "Qr_kZm28:233MTzAIVC.231LTP";

const authMW = async (req, res, next) => {
  const token = req.cookies.auth;

  try {
    const { userId } = jwt.verify(token, TOKEN_SECRET);
    req.user = userId;
    next();
  } catch (err) {
    next(err);
  }
};

export default authMW;
