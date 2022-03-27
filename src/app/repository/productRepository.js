import { Op } from "sequelize";
import Product from "../models/Product.js";

const select = async (url) => {
    return Product.findOne({
        raw: true,
        where: {
            updatedAt: {
                [Op.gt]: oneHourAgo() 
            },
            url: {
                [Op.eq]: url
            }
        }
    }).then((product) => {
        if (product == null) return null;

        const { title, image, price, description, url } = product;

        return {
            title,
            image,
            price,
            description,
            url
        }
    });
}

const oneHourAgo = () =>{
    const date = new Date();
    date.setHours(date.getHours() - 1);
    return date;
}

const insert = async (product) => {
    return Product.create(product);
}

export default {
    select,
    insert
}