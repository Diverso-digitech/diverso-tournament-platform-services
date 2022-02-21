import express from "express";
import { registerUser } from "../services/index.js";

const router = express.Router()

router.post('/register', (req,res) => registerUser(req, res))

export default router
