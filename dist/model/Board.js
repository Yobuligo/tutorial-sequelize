"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
const Note_1 = __importDefault(require("./Note"));
const User_1 = __importDefault(require("./User"));
class Board extends sequelize_1.Model {
    updateLastVersion() {
        this.update({ lastVersion: new Date() }, { where: { id: this.dataValues.id } });
    }
}
Board.hasMany(Note_1.default);
Board.belongsToMany(User_1.default, { through: "usersBoards" });
Board.init({
    createdAt: sequelize_1.DataTypes.DATE,
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    lastVersion: sequelize_1.DataTypes.DATE,
    title: sequelize_1.DataTypes.STRING,
    UUID: sequelize_1.DataTypes.STRING,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    sequelize: db_1.db,
    tableName: "boards",
});
exports.default = Board;
//# sourceMappingURL=Board.js.map