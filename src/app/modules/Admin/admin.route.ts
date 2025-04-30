import express from "express";
import { UserRole } from "../../../generated/prisma";
import { AdminController } from "./admin.controller";

const router = express.Router();

router.get("/", AdminController.getAllFromDB);
router.get("/:id", AdminController.getByIdFromDB);
router.patch("/:id", AdminController.updateIntoDB);
router.delete("/:id", AdminController.deleteFromDB);
router.get("/soft/:id", AdminController.softDeleteFromDB);

export const AdminRoutes = router;
