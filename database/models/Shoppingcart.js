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

    Shoppingcart.associate = function(models) {     
        Shoppingcart.belongsTo (models.Users, { 
            as: "users",
            foreignKey: "user_id"
        })

        Shoppingcart.belongsToMany(models.Products, {
            as: 'productsshoppingcart',
            through: 'shoppingcart_product',
            foreignKey: 'shoppingCart_id',
            otherKey: 'products_id',
            timestamps: false,
        })
    }

    return Shoppingcart;
}