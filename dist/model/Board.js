"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = exports.BoardDefinition = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
const Note_1 = require("./Note");
const User_1 = require("./User");
exports.BoardDefinition = db_1.db.define("boards", {
    lastVersion: sequelize_1.DataTypes.DATE,
    title: sequelize_1.DataTypes.STRING,
    UUID: sequelize_1.DataTypes.STRING,
});
exports.BoardDefinition.hasMany(Note_1.NoteDefinition);
exports.BoardDefinition.belongsToMany(User_1.UserDefinition, { through: "usersBoards" });
class Board extends exports.BoardDefinition {
    updateLastVersion() {
        this.update({ lastVersion: new Date() }, { where: { id: this.dataValues.id } });
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map