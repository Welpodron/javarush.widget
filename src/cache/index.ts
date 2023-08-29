import fs from "fs/promises";

export const get = async ({ cachePath }: { cachePath: string }) => {
  try {
    console.log("Поиск кеша по пути: ", cachePath);

    try {
      await fs.access(cachePath, fs.constants.F_OK);
    } catch (_) {
      console.log("Кеш не найден");
      return;
    }

    const cache: {
      c: string;
      e: number;
    } = await JSON.parse(await fs.readFile(cachePath, "utf-8"));

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
  } catch (error) {
    console.log(error);
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
    console.log("Сохранение кеша по пути: ", cachePath);

    const currentTime = new Date().getTime();

    const cache = {
      c: content,
      e: currentTime + duration,
    };

    await fs.writeFile(cachePath, JSON.stringify(cache));

    console.log("Кеш сохранен");

    return content;
  } catch (error) {
    console.log(error);
  }
};
