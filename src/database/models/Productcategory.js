module.exports = (sequelize, DataTypes) => {
    const alias = "Productcategory"; 

    let cols = { 
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }; 

    let config = {
        tableName: "productscategory", 
        timestamps: false 
    };

    const Productcategory = sequelize.define(alias, cols, config);

    Productcategory.associate = (models) => {
        Productcategory.hasMany(models.Product, { 
            as: "productcategory",
            timestamps: false,
            foreignKey: "category_id"
        });
    }

    return Productcategory;
}