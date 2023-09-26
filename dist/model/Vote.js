"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vote = exports.VoteDefinition = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
const Note_1 = require("./Note");
const User_1 = require("./User");
exports.VoteDefinition = db_1.db.define("votes", {
    type: sequelize_1.DataTypes.INTEGER,
});
exports.VoteDefinition.belongsTo(Note_1.NoteDefinition);
exports.VoteDefinition.belongsTo(User_1.UserDefinition);
class Vote extends exports.VoteDefinition {
}
exports.Vote = Vote;
//# sourceMappingURL=Vote.js.map