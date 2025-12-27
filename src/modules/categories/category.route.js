import { Router } from "express";
import { createCategoryController, deleteCategoryController, getALlCategoryController, updateCategoryController } from "./category.controller.js";
import { requireAdmin, requiredAuth } from "../../middlewares/requireAuth.middleware.js";

const categoryRoute = Router()
categoryRoute.get("/", getALlCategoryController)
categoryRoute.post("/create", requiredAuth, requireAdmin, createCategoryController)
categoryRoute.put("/update/:id", requiredAuth, requireAdmin, updateCategoryController)
categoryRoute.delete("/delete/:id", requiredAuth, requireAdmin, deleteCategoryController)

export default categoryRoute