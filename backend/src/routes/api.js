import { Router } from "express";

import { register, login } from "../controllers/auth.js";
import {
  createPost,
  getPosts,
  getUserPosts,
  editPost,
  deletePost,
  getPost,
} from "../controllers/post.js";
import {
  heartbeat,
  csrfProtection,
  cookieClear,
  isUserLoggedIn,
} from "../controllers/other.js";
import authMW from "../middlewares/authMW.js";

const router = Router();

//Posts
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/posts").post(authMW, createPost);

//Gets
router.route("/").get(heartbeat);
router.route("/csrf-protection").get(csrfProtection);
router.route("/isuserloggedin").get(authMW, isUserLoggedIn);
router.route("/posts").get(getPosts);
router.route("/userposts").get(authMW, getUserPosts);
router.route("/posts/:id", authMW, getPost);

//Deletes
router.route("/cookieclear").delete(cookieClear);
router.route("/posts/:id").delete(deletePost);

//Put
router.route("/posts/:id").put(editPost);

export default router;
