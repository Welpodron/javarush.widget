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
exports.set = exports.get = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const loger_1 = require("../loger");
const path_1 = __importDefault(require("path"));
const CACHE_PATH = "./cache.cache";
const get = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _path = path_1.default.resolve(CACHE_PATH);
        (0, loger_1.log)({ message: `Поиск кеша по пути: ${_path}`, code: "CACHE" });
        let cache = {
            c: "",
            e: 0,
        };
        try {
            cache = yield JSON.parse(yield promises_1.default.readFile(_path, "utf-8"));
        }
        catch (_) {
            (0, loger_1.log)({
                message: "Кеш не найден, поврежден или не имеет доступа для чтения и записи",
                code: "CACHE",
            });
            return;
        }
        if (!cache.c || !cache.e) {
            (0, loger_1.log)({ message: "Кеш поврежден или не является валидным", code: "CACHE" });
            return;
        }
        const currentTime = new Date().getTime();
        if (currentTime > cache.e) {
            (0, loger_1.log)({ message: "Кеш устарел", code: "CACHE" });
            return;
        }
        (0, loger_1.log)({ message: "Кеш найден", code: "CACHE" });
        return cache.c;
    }
    catch (error) {
        (0, loger_1.log)({ message: error, code: "CACHE" });
    }
});
exports.get = get;
const set = ({ content, duration = 24 * 60 * 60 * 1000, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _path = path_1.default.resolve(CACHE_PATH);
        (0, loger_1.log)({ message: `Сохранение кеша по пути: ${_path}`, code: "CACHE" });
        const currentTime = new Date().getTime();
        const cache = {
            c: content,
            e: currentTime + duration,
        };
        yield promises_1.default.writeFile(_path, JSON.stringify(cache));
        (0, loger_1.log)({ message: "Кеш сохранен", code: "CACHE" });
        return content;
    }
    catch (error) {
        (0, loger_1.log)({ message: error, code: "CACHE" });
    }
});
exports.set = set;
