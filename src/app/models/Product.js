
import {Model, DataTypes} from 'sequelize'

class Product extends Model{
    static init(sequelize){
        super.init(
            {
                title: DataTypes.TEXT,
                image: DataTypes.TEXT,
                price: DataTypes.STRING,
                description: DataTypes.TEXT,
                url: DataTypes.STRING(500)
            },{
                sequelize
            }
        );
        return this
    }
}
export default Product;