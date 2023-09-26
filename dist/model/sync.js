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
exports.sync = void 0;
const Board_1 = __importDefault(require("./Board"));
const Note_1 = __importDefault(require("./Note"));
const User_1 = __importDefault(require("./User"));
const Vote_1 = __importDefault(require("./Vote"));
const sync = () => __awaiter(void 0, void 0, void 0, function* () {
    const force = false;
    yield Board_1.default.sync({ force });
    yield Note_1.default.sync({ force });
    yield User_1.default.sync({ force });
    yield Vote_1.default.sync({ force });
});
exports.sync = sync;
//# sourceMappingURL=sync.js.map