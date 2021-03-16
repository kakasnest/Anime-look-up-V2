//NPM module import
import { Router } from "express";

const postRouter = Router();

postRouter.get("/", (req, res) => {
  res.json("We are on posts' placeholder!");
});

export default postRouter;
