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
exports.get = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const loger_1 = require("../loger");
const utils_1 = require("../utils");
const get = ({ url, delay = 9500, tries = 3, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, loger_1.log)({ message: `Получение данных по адресу: ${url}`, code: "REQUEST" });
        let response = yield (0, node_fetch_1.default)(url);
        if (response.ok && response.status === 200) {
            (0, loger_1.log)({ message: "Данные получены", code: "REQUEST" });
            return yield response.text();
        }
        throw new Error(`Не получилось получить ${url} Попытка: ${tries}`);
    }
    catch (error) {
        (0, loger_1.log)({ message: error, code: "REQUEST" });
        if (tries && tries > 0) {
            yield (0, utils_1.sleep)({ ms: delay });
            return (0, exports.get)({ url, delay, tries: tries - 1 });
        }
    }
    return "";
});
exports.get = get;
