import { Router } from "express";

import { register, login } from "../controllers/auth.js";
import { getPosts } from "../controllers/post.js";
import {
  heartbeat,
  csrfProtection,
  cookieClear,
} from "../controllers/other.js";

const router = Router();

//Gets
router.route("/").get(heartbeat);
router.route("/csrf-protection").get(csrfProtection);
router.route("/posts").get(getPosts);

//Posts
router.route("/register").post(register);
router.route("/login").post(login);

//Deletes
router.route("/cookieclear").delete(cookieClear);

export default router;
