import {Sequelize} from "sequelize";
import Product from "../models/Product.js";
import databaseconfig from '../../config/config.js'

const models = [Product]

class Database{
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseconfig)
        models
        .map(model => model.init(this.connection))
        .map(model=> model.associate && model.associate(this.connection.models))
    }
}

export default Database;