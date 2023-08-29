import fs from "fs/promises";

import { log } from "../loger";

export const get = async ({ cachePath }: { cachePath: string }) => {
  try {
    log({ message: `Поиск кеша по пути: ${cachePath}`, code: "CACHE" });

    try {
      await fs.access(cachePath, fs.constants.F_OK);
    } catch (_) {
      log({ message: "Кеш не найден", code: "CACHE" });
      return;
    }

    const cache: {
      c: string;
      e: number;
    } = await JSON.parse(await fs.readFile(cachePath, "utf-8"));

    if (!cache.c || !cache.e) {
      log({ message: "Кеш поврежден", code: "CACHE" });
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
  cachePath,
  duration = 24 * 60 * 60 * 1000,
}: {
  content: string;
  cachePath: string;
  duration?: number;
}) => {
  try {
    log({ message: `Сохранение кеша по пути: ${cachePath}`, code: "CACHE" });

    const currentTime = new Date().getTime();

    const cache = {
      c: content,
      e: currentTime + duration,
    };

    await fs.writeFile(cachePath, JSON.stringify(cache));

    log({ message: "Кеш сохранен", code: "CACHE" });

    return content;
  } catch (error) {
    log({ message: error, code: "CACHE" });
  }
};
