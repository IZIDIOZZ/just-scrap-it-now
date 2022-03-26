import { getProductInformation } from "../../services/scrap-service.js";
import Product from "../models/Product.js";

export default {
    async scrapp(req, res) {
        const { url } = req.body;
        const productInformation = await getProductInformation(url);
        if (!requestWasSuccess(productInformation)) await Product.findOne(productInformation);
        return res.send(productInformation);
    },
}

const requestWasSuccess = (productInformation) => productInformation.hasOwnProperty('errorMessage')
