module.exports = (sequelize, DataTypes) => {
    let alias = "Productcategory"; 

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

    return Productcategory;
}