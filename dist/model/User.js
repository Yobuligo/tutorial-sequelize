"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserDefinition = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
const Board_1 = require("./Board");
const Vote_1 = require("./Vote");
exports.UserDefinition = db_1.db.define("users", {
    password: sequelize_1.DataTypes.STRING,
    username: sequelize_1.DataTypes.STRING,
});
exports.UserDefinition.hasMany(Vote_1.VoteDefinition);
exports.UserDefinition.belongsToMany(Board_1.BoardDefinition, { through: "usersBoards" });
class User extends exports.UserDefinition {
}
exports.User = User;
//# sourceMappingURL=User.js.map