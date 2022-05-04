const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model { };

Ingredient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ingredient_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredient_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ingredient_unit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pantry_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "pantry",
                key: "id",
            },
        },
        // shoppinglist_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "shoppinglist",
        //         key: "id",
        //     },
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ingredient',
    }
);

module.exports = Ingredient;