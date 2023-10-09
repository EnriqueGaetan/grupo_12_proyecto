module.exports = (sequelize, DataTypes) => {
    let alias = "Color"; 

    let cols = { 
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: DataTypes.STRING
        }
    }; 

    let config = {
        tableName: "colors", 
        timestamps: false 
    };

    const Color = sequelize.define(alias, cols, config);

    Color.associate = function(models) {
        Color.hasMany (models.Products, { 
            as: "products", 
            foreignKey: "color_id"
        })
    }
    return Color;
}