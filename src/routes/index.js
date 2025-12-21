import { Router } from "express";
const router = Router()

router.use("/health", ((req, res) => {
    return res.status(200).json({
        message: "Connect OKE"
    })
}))