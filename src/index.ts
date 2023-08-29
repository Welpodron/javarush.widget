import "dotenv/config";
import express from "express";
import cors from "cors";

import { get as getCache, set as setCache } from "./cache";
import { get as getHTML } from "./request";
import { parse as parseHTML } from "./parser";
import { build as buildWidget } from "./builder";

const PORT = process.env.PORT || 3000;
const CACHE_PATH = "./cache";

const app = express();

app.use(cors());

app.get("/widget", async (_, res) => {
  let content = await getCache({
    cachePath: CACHE_PATH,
  });

  if (content == null || !content.trim().length) {
    const html = await getHTML({
      url: process.env.URL || "",
    });

    const data = parseHTML({ html });

    content = await buildWidget({ data });

    content = await setCache({
      content,
      cachePath: CACHE_PATH,
    });

    if (content == null || !content.trim().length) {
      res.send("");
      return;
    }
  }
  res.writeHead(200, {
    "Content-Type": "image/svg+xml",
    "Content-Length": content.length,
  });
  res.end(content);
});

app.listen(PORT, async () => {
  console.log(`Сервер запущен по адресу: http://localhost:${PORT}`);
});
