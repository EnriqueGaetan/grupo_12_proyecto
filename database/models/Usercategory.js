module.exports = (sequelize, DataTypes) => {
    let alias = "Usercategory"; 

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
        tableName: "userscategory", 
        timestamps: false 
    };

    const Usercategory = sequelize.define(alias, cols, config);

    return Usercategory;
}