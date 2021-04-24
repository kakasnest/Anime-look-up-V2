import { Router } from "express";

import {
  createPost,
  getUserPosts,
  editPost,
  deletePost,
} from "../controllers/post.js";
import { isUserLoggedIn } from "../controllers/other.js";
import authMW from "../middlewares/authMW.js";

const router = Router();

router.use(authMW);

//Gets
router.route("/isuserloggedin").get(isUserLoggedIn);
router.route("/userposts").get(getUserPosts);

//Posts
router.route("/posts").post(createPost);

//Deletes
router.route("/posts/:id").delete(deletePost);
//Put
router.route("/posts/:id").put(editPost);

export default router;
