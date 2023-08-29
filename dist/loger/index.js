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
exports.log = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const LOG_PATH = "./log.log";
const log = ({ message, code = "INFO", }) => __awaiter(void 0, void 0, void 0, function* () {
    if (message == null || !message) {
        return;
    }
    const _path = path_1.default.resolve(LOG_PATH);
    const date = new Date().toISOString();
    const log = `[${code}][${date}] ${message.toString()}\n`;
    console.log(log);
    try {
        yield promises_1.default.appendFile(_path, log);
    }
    catch (error) {
        console.log(error);
    }
});
exports.log = log;
