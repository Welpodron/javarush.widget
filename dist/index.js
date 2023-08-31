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
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const loger_1 = require("./loger");
const cache_1 = require("./cache");
const request_1 = require("./request");
const parser_1 = require("./parser");
const builder_1 = require("./builder");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/widget", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    let content = yield (0, cache_1.get)();
    if (content == null || !content.trim().length) {
        const html = yield (0, request_1.get)({
            url: process.env.URL || "",
        });
        const data = (0, parser_1.parse)({ html });
        content = yield (0, builder_1.build)({ data });
        content = yield (0, cache_1.set)({
            content,
        });
        if (content == null || !content.trim().length) {
            res.send("");
            return;
        }
    }
    res.writeHead(200, {
        "Cache-Control": "no-cache",
        "Content-Type": "image/svg+xml",
        "Content-Length": content.length,
    });
    res.end(content);
}));
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    (0, loger_1.log)({
        message: `Сервер запущен порт: ${PORT}`,
        code: "SERVER",
    });
}));
