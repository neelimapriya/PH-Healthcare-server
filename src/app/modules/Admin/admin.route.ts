import express from "express";
import { UserRole } from "../../../generated/prisma";
import { AdminController } from "./admin.controller";

const router = express.Router();

router.get("/", AdminController.getAllFromDB);

export const AdminRoutes = router;
