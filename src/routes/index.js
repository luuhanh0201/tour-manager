import { Router } from "express";
import authRoute from "../modules/auth/auth.route.js";
const router = Router()

router.use("/auth", authRoute)
router.use("/health", ((req, res) => {
    return res.status(200).json({
        message: "Connect OKE"
    })
}))
export default router