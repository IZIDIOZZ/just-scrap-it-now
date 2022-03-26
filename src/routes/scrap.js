import express from "express";
import { getProductInformation } from "../services/scrap-service.js";

const router = express.Router();

router.post('/', async (req, res) => {
    const { url } = req.body;
    res.send(await getProductInformation(url));
})

export default router;