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
const get = ({ cachePath }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Поиск кеша по пути: ", cachePath);
        try {
            yield promises_1.default.access(cachePath, promises_1.default.constants.F_OK);
        }
        catch (_) {
            console.log("Кеш не найден");
            return;
        }
        const cache = yield JSON.parse(yield promises_1.default.readFile(cachePath, "utf-8"));
        if (!cache.c || !cache.e) {
            console.log("Кеш поврежден");
            return;
        }
        const currentTime = new Date().getTime();
        if (currentTime > cache.e) {
            console.log("Кеш устарел");
            return;
        }
        console.log("Кеш найден");
        return cache.c;
    }
    catch (error) {
        console.log(error);
    }
});
exports.get = get;
const set = ({ content, cachePath, duration = 24 * 60 * 60 * 1000, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Сохранение кеша по пути: ", cachePath);
        const currentTime = new Date().getTime();
        const cache = {
            c: content,
            e: currentTime + duration,
        };
        yield promises_1.default.writeFile(cachePath, JSON.stringify(cache));
        console.log("Кеш сохранен");
        return content;
    }
    catch (error) {
        console.log(error);
    }
});
exports.set = set;
