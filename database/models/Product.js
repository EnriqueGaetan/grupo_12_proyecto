module.exports = (sequelize, DataTypes) => {
    let alias = "Product"; 

    let cols = { 
        user_id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        color_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        options_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category_id  : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
      
    }; 

    let config = {
        tableName: "products", 
        timestamps: false 
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
}