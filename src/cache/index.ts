import fs from "fs/promises";

import { log } from "../loger";

import path from "path";

const CACHE_PATH = "./cache.cache";

export const get = async () => {
  try {
    const _path = path.resolve(CACHE_PATH);

    log({ message: `Поиск кеша по пути: ${_path}`, code: "CACHE" });

    let cache = {
      c: "",
      e: 0,
    };

    try {
      cache = await JSON.parse(await fs.readFile(_path, "utf-8"));
    } catch (_) {
      log({
        message:
          "Кеш не найден, поврежден или не имеет доступа для чтения и записи",
        code: "CACHE",
      });
      return;
    }

    if (!cache.c || !cache.e) {
      log({ message: "Кеш поврежден или не является валидным", code: "CACHE" });
      return;
    }

    const currentTime = new Date().getTime();

    if (currentTime > cache.e) {
      log({ message: "Кеш устарел", code: "CACHE" });
      return;
    }

    log({ message: "Кеш найден", code: "CACHE" });

    return cache.c;
  } catch (error) {
    log({ message: error, code: "CACHE" });
  }
};
export const set = async ({
  content,
  duration = 24 * 60 * 60 * 1000,
}: {
  content: string;
  duration?: number;
}) => {
  try {
    const _path = path.resolve(CACHE_PATH);

    log({ message: `Сохранение кеша по пути: ${_path}`, code: "CACHE" });

    const currentTime = new Date().getTime();

    const cache = {
      c: content,
      e: currentTime + duration,
    };

    await fs.writeFile(_path, JSON.stringify(cache));

    log({ message: "Кеш сохранен", code: "CACHE" });

    return content;
  } catch (error) {
    log({ message: error, code: "CACHE" });
  }
};
