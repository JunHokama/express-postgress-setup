import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controller/userController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";


const router = express.Router();

router.get("/user", verifyToken, getAllUsers);
router.get("/user/:id", verifyToken, getUserById);
router.post("/user", verifyToken, createUser);
router.put("/user/:id", verifyToken, updateUser);
router.delete("/user/:id", verifyToken, deleteUser);

export default router;