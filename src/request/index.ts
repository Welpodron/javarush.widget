import fetch from "node-fetch";

import { sleep } from "../utils";

export const get = async ({
  url,
  delay = 9500,
  tries = 3,
}: {
  url: string;
  delay?: number;
  tries?: number;
}): Promise<string> => {
  try {
    console.log("Получение данных по адресу: ", url);

    let response = await fetch(url);

    if (response.ok && response.status === 200) {
      console.log("Данные получены");
      return await response.text();
    }

    throw new Error(`Не получилось получить ${url} Попытка: ${tries}`);
  } catch (error) {
    console.log(error);

    if (tries && tries > 0) {
      await sleep({ ms: delay });
      return get({ url, delay, tries: tries - 1 });
    }
  }

  return "";
};
