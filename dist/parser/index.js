"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const node_html_parser_1 = require("node-html-parser");
const parse = ({ html, levelSelector = ".user-profile-card__level", ratingSelector = ".user-profile-card__rating-value", }) => {
    try {
        console.log("Парсинг данных");
        const dom = (0, node_html_parser_1.parse)(html);
        let level = 0;
        let rating = 0;
        const levelElement = dom.querySelector(levelSelector);
        if (levelElement) {
            const parsed = parseInt(levelElement.text);
            level = isNaN(parsed) ? 0 : parsed;
        }
        const ratingElement = dom.querySelector(ratingSelector);
        if (ratingElement) {
            const parsed = parseInt(ratingElement.text);
            rating = isNaN(parsed) ? 0 : parsed;
        }
        console.log("Данные распарсены");
        return {
            level: level.toString(),
            rating: rating.toString(),
        };
    }
    catch (error) {
        console.log(error);
    }
    return {
        level: "0",
        rating: "0",
    };
};
exports.parse = parse;
