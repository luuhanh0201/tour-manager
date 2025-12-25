import { Router } from "express";
import { logout, refreshToken, signIn, signUp } from "./auth.controller.js";
const authRoute = Router()

authRoute.post("/sign-in", signIn)
authRoute.post("/sign-up", signUp)
authRoute.post("/refresh", refreshToken)
authRoute.post("/logout", logout)
export default authRoute