import express from "express";
import ProductController from "./controllers/ProductController.js";

const router = express.Router();

router.post('/', (req, res)=>{ ProductController.scrapp(req,res) })

export default router;