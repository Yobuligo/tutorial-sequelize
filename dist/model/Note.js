"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
const Board_1 = __importDefault(require("./Board"));
const Vote_1 = __importDefault(require("./Vote"));
class Note extends sequelize_1.Model {
}
Note.init({
    createdAt: sequelize_1.DataTypes.DATE,
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    text: sequelize_1.DataTypes.STRING,
    type: sequelize_1.DataTypes.INTEGER,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    sequelize: db_1.db,
    tableName: "notes",
});
Note.belongsTo(Board_1.default);
Note.hasMany(Vote_1.default);
exports.default = Note;
//# sourceMappingURL=Note.js.map