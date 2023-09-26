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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sync = void 0;
const Board_1 = require("./Board");
const Note_1 = require("./Note");
const User_1 = require("./User");
const Vote_1 = require("./Vote");
const sync = () => __awaiter(void 0, void 0, void 0, function* () {
    const force = false;
    yield Board_1.Board.sync({ force });
    yield Note_1.Note.sync({ force });
    yield User_1.User.sync({ force });
    yield Vote_1.Vote.sync({ force });
});
exports.sync = sync;
//# sourceMappingURL=sync.js.map