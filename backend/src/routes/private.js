import { Router } from "express";

import {
  createPost,
  getUserPosts,
  editPost,
  deletePost,
} from "../controllers/post.js";
import authMW from "../middlewares/authMW.js";
import { getUserData } from "../controllers/user.js";

const router = Router();

router.use(authMW);

//Gets
router.route("/userposts").get(getUserPosts);
router.route("/user").get(getUserData);

//Posts
router.route("/posts").post(createPost);

//Deletes
router.route("/posts/:id").delete(deletePost);
//Put
router.route("/posts/:id").put(editPost);

export default router;
