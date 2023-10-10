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
        tableName: "usercategorys", 
        timestamps: false 
    };

    const Usercategory = sequelize.define(alias, cols, config);

    // Usercategory.associate = function(models) {
    //     Usercategory.hasMany(models.Users, { 
    //         as: "users",
    //         foreignKey: "category_id"
    //     })
    // }

    return Usercategory;
}