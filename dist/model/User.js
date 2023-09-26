"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
const Board_1 = __importDefault(require("./Board"));
const Vote_1 = __importDefault(require("./Vote"));
class User extends sequelize_1.Model {
}
User.hasMany(Vote_1.default);
User.belongsToMany(Board_1.default, { through: "usersBoards" });
User.init({
    createdAt: sequelize_1.DataTypes.DATE,
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    password: sequelize_1.DataTypes.STRING,
    updatedAt: sequelize_1.DataTypes.DATE,
    username: sequelize_1.DataTypes.STRING,
}, {
    sequelize: db_1.db,
    tableName: "users",
});
exports.default = User;
//# sourceMappingURL=User.js.map