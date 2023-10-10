module.exports = (sequelize, DataTypes) => {
    let alias = "Option"; 

    let cols = { 
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        liters: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }; 

    let config = {
        tableName: "options", 
        timestamps: false 
    };

    const Option = sequelize.define(alias, cols, config);

    Option.associate = function(models) {
        Option.hasMany(models.Product, { 
            as: "products",
            foreignKey: "options_id"
        });
    };
    

    return Option;
}