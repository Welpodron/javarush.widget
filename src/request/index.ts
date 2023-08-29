import fetch from "node-fetch";
import { log } from "../loger";
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
    log({ message: `Получение данных по адресу: ${url}`, code: "REQUEST" });

    let response = await fetch(url);

    if (response.ok && response.status === 200) {
      log({ message: "Данные получены", code: "REQUEST" });
      return await response.text();
    }

    throw new Error(`Не получилось получить ${url} Попытка: ${tries}`);
  } catch (error) {
    log({ message: error, code: "REQUEST" });

    if (tries && tries > 0) {
      await sleep({ ms: delay });
      return get({ url, delay, tries: tries - 1 });
    }
  }

  return "";
};
