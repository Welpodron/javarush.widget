import { parse as _parse } from "node-html-parser";

export const parse = ({
  html,
  levelSelector = ".user-profile-card__level",
  ratingSelector = ".user-profile-card__rating-value",
}: {
  html: string;
  levelSelector?: string;
  ratingSelector?: string;
}) => {
  try {
    console.log("Парсинг данных");

    const dom = _parse(html);

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
  } catch (error) {
    console.log(error);
  }

  return {
    level: "0",
    rating: "0",
  };
};
