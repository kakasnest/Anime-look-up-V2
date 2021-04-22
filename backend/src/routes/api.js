import { Router } from "express";

import publicRouter from "./public.js";
import privateRouter from "./private.js";

const router = Router();

router.use("/public", publicRouter);
router.use("/private", privateRouter);

export default router;
