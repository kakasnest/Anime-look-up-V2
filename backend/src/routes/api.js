import { Router } from "express";
import { register, login } from "../controllers/auth.js";
import heartbeat from "../controllers/heartbeat.js";
import cookieClear from "../controllers/cookieClear.js";
import csrfProtection from "../controllers/csrfProtection.js";

const router = Router();

//Posts
router.route("/register").post(register);
router.route("/login").post(login);

//Gets
router.route("/").get(heartbeat);
router.route("/csrf-protection").get(csrfProtection);

//Deletes
router.route("/cookieClear").delete(cookieClear);

export default router;
