module.exports = (sequelize, DataTypes) => {
    let alias = "User"; 

    let cols = { 
        user_id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // image: {
        //     type: DataTypes.BLOB,
        //     allowNull: false
        // }
    }; 

    let config = {
        tableName: "users", 
        timestamps: false 
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Usercategory, {
            as: "usercategorys",
            foreignKey: "category_id"
        });
    
        User.hasMany(models.Shoppingcart, {
            as: "shoppingcarts",
            foreignKey: "user_id"
        });
    
        User.belongsToMany(models.Product, {
            as: 'productsuser',
            through: 'users_products',
            foreignKey: 'users_id',
            otherKey: 'products_id',
            timestamps: false,
        });
    };
    
        
        return User;
        
    };
