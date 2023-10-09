module.exports = (sequelize, DataTypes) => {
    let alias = "Shoppingcart"; 

    let cols = { 
        cart_id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        total_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        items: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }; 

    let config = {
        tableName: "shoppingcarts", 
        timestamps: false 
    };

    const Shoppingcart = sequelize.define(alias, cols, config);

    return Shoppingcart;
}