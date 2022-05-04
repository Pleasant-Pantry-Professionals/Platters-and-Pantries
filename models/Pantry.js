const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pantry extends Model { };

Pantry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        // ingredient_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "ingredient",
        //         key: "id",
        //     },
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pantry',
    }
);

module.exports = Pantry;