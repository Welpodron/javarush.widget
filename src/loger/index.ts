import fs from "fs/promises";

const LOG_PATH = "./log.log";

export const log = async ({
  message,
  code = "INFO",
}: {
  message: any;
  code?: string;
}) => {
  if (message == null || !message) {
    return;
  }

  const date = new Date().toISOString();

  const log = `[${code}][${date}] ${message.toString()}\n`;
  console.log(log);

  try {
    await fs.appendFile(LOG_PATH, log);
  } catch (error) {
    console.log(error);
  }
};
