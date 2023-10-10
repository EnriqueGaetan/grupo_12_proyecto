const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    let alias = "Color"; 

    let cols = { 
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false

        }
    }; 

    let config = {
        tableName: "colors", 
        timestamps: false 
    };

    const Color = sequelize.define(alias, cols, config);

    Color.associate = function(models) {
        Color.hasMany(models.Product, { 
            as: 'colors',
            timestamps: false,
            foreignKey: 'color_id'
        });
    }
    
    return Color;
}