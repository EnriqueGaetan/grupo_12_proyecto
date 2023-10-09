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
        Product.belongsTo(models.Productcategorys, { 
            as: "productcategorys",
            foreignKey: "category_id"
        })
    }

    Product.belongsTo(models.Options, { 
        as: "options",
        foreignKey: "options_id"
    })


    Product.associate = function (models) {
        Product.belongsTo(models.Colors, { 
            as: "colors",
            foreignKey: "color_id"
        })      

        Product.belongsToMany(models.Shoppingcarts, {
            as: 'shoppingcartproducts',
            through: 'shoppingcart_product',
            foreignKey: 'products_id',
            otherKey: 'shoppingCart_id',
            timestamps: false,
        })

        Product.belongsToMany(models.Users, {
            as: 'userproducts',
            through: 'users_products',
            foreignKey: 'products_id',
            otherKey: 'users_id',
            timestamps: false,
        })
    }

    return Product;
}
