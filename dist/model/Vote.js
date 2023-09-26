"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
const Note_1 = __importDefault(require("./Note"));
const User_1 = __importDefault(require("./User"));
class Vote extends sequelize_1.Model {
}
Vote.belongsTo(Note_1.default);
Vote.belongsTo(User_1.default);
Vote.init({
    createdAt: sequelize_1.DataTypes.DATE,
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    type: sequelize_1.DataTypes.INTEGER,
    updatedAt: sequelize_1.DataTypes.DATE,
}, { sequelize: db_1.db, tableName: "votes" });
exports.default = Vote;
//# sourceMappingURL=Vote.js.map