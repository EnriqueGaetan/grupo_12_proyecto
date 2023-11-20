module.exports = (sequelize, DataTypes) => {
    let alias = "Product";

    let cols = {
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
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
        options_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    };

    let config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Productcategory, { 
            as: "productcategorys",
            foreignKey: "category_id"
        });
    
        Product.belongsTo(models.Option, { 
            as: "options",
            foreignKey: "options_id"
        });
    
        Product.belongsTo(models.Color, { 
            as: "colors",
            timestamps: false,
            foreignKey: "color_id"
        });
    
        Product.belongsToMany(models.Shoppingcart, {
            as: 'shoppingcartproducts',
            through: 'shoppingcart_product',
            foreignKey: 'products_id',
            otherKey: 'shoppingCart_id',
            timestamps: false,
        });
    
        Product.belongsToMany(models.User, {
            as: 'userproducts',
            through: 'users_products',
            foreignKey: 'products_id',
            otherKey: 'users_id',
            timestamps: false,
        });
    };
    

    return Product;
}
