//NPM module import
import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.json("We are on users' placeholder!");
});

export default userRouter;
