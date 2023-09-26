"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db/db");
const Note_1 = __importDefault(require("./Note"));
const test = db_1.db.define("tabname", {
    title: sequelize_1.DataTypes.STRING,
});
test.hasMany(Note_1.default);
class Test extends test {
}
//# sourceMappingURL=Test.js.map