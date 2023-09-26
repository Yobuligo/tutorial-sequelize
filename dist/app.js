"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const AppConfig_1 = require("./AppConfig");
const Board_1 = __importDefault(require("./model/Board"));
const Note_1 = __importDefault(require("./model/Note"));
const User_1 = __importDefault(require("./model/User"));
const error_1 = require("./utils/error");
const sync_1 = require("./model/sync");
(0, sync_1.sync)();
const server = (0, express_1.default)();
server.use(body_parser_1.default.json());
server.get("/call", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    debugger;
    //   const user = await User.create({
    //     username: "test",
    //     password: "test",
    //   });
    //   const users = await User.findAll();
    const user = (_a = (yield User_1.default.findOne())) !== null && _a !== void 0 ? _a : (0, error_1.error)();
    const board = yield Board_1.default.create({
        lastVersion: new Date(),
        title: "Sprint 3",
        UUID: "678236862378-123123123-123123",
    });
    const boards = yield Board_1.default.findAll({
        where: {
            UUID: "678236862378-123123123-123123",
        },
    });
    const note = yield Note_1.default.create({
        text: "My first Note",
        type: 0,
    });
    const myBoard = yield Board_1.default.findOne({
        where: { UUID: "678236862378-123123123-123123" },
        include: Note_1.default,
    });
    yield myBoard.addNote(note);
    const notes = yield myBoard.getNotes();
    const boardUsers = yield user.getBoards();
    res.status(200).send("Done");
}));
server.listen(AppConfig_1.AppConfig.SERVER_PORT);
//# sourceMappingURL=app.js.map