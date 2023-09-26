"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = exports.NoteDefinition = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
const Board_1 = require("./Board");
const Vote_1 = require("./Vote");
exports.NoteDefinition = db_1.db.define("notes", {
    text: sequelize_1.DataTypes.STRING,
    type: sequelize_1.DataTypes.INTEGER,
});
exports.NoteDefinition.hasMany(Vote_1.VoteDefinition);
exports.NoteDefinition.belongsTo(Board_1.BoardDefinition);
class Note extends exports.NoteDefinition {
}
exports.Note = Note;
//# sourceMappingURL=Note.js.map