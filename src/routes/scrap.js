import express from "express";
import { getProductInformation } from "../services/scrap-service.js";
import ProductController from "../app/controllers/ProductController.js";

const router = express.Router();

router.post('/', (req, res)=>{ ProductController.scrapp(req,res) })
export default router;