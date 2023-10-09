module.exports = (sequelize, DataTypes) => {
    let alias = "User_product"; 

    let cols = { 
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        users_id: {
            type: DataTypes.INTEGER, 
        },
        products_id: {
            type: DataTypes.INTEGER, 
        }
    }; 

    let config = {
        tableName: "users_products", 
        timestamps: false 
    };

    const User_product = sequelize.define(alias, cols, config);

    return User_product;
}