const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const PopulationDistribution = sequelize.define("PopulationDistribution",
    {
        // 定义模型属性
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        region: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'region',      // 对应数据库字段名
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'value',
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',  // 如果数据库字段是 created_at，需要映射
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
        }
    },
    {
        tableName: 'population_distribution',      // 指定数据库表名
        timestamps: true,             // 启用时间戳，会自动管理 createdAt 和 updatedAt
        underscored: true,            // 如果数据库字段是下划线命名，这个选项会自动转换驼峰
        paranoid: true,               // 逻辑删除
    });
module.exports = PopulationDistribution;