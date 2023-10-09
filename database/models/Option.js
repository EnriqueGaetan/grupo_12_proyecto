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

    return Option;
}