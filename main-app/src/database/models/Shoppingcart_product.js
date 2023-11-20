module.exports = (sequelize, DataTypes) => {
    let alias = "Shoppingcart_product"; 

    let cols = { 
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        shoppingCart_id: {
            type: DataTypes.INTEGER, 
        },
        products_id: {
            type: DataTypes.INTEGER, 
        }
    }; 

    let config = {
        tableName: "shoppingcart_products", 
        timestamps: false 
    };

    const Shoppingcart_product = sequelize.define(alias, cols, config);

    return Shoppingcart_product;
}