import { getProductInformation, } from "../services/scrapService.js";
import Product from "../models/Product.js";

export default {
    async scrapp(req, res) {
        const { url } = req.body;
        if (!url) {
            return res.send({
                errorMessage: `url must be informed and cannot be empty`
            })
        };

        const productInformation = await getProductInformation(url);
        if (!requestWasSuccess(productInformation)) await Product.findOne(productInformation);
        return res.send(productInformation);
    },
}

const requestWasSuccess = (productInformation) => productInformation.hasOwnProperty('errorMessage')
