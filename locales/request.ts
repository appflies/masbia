import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import fs from "fs";
import path from "path";

export const locales = ["en", "es"] as const;
export const defaultLocale = "en" as const;

type Locale = (typeof locales)[number];

function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

async function loadMessages(locale: Locale) {
  const messagesDir = path.join(process.cwd(), `locales/i18n/${locale}`);

  if (!fs.existsSync(messagesDir)) {
    console.warn(`Locale directory not found: ${messagesDir}`);
    return {};
  }

  const messagesFiles = fs.readdirSync(messagesDir);
  let messages: Record<string, any> = {};

  for (const file of messagesFiles) {
    if (file.endsWith(".json")) {
      const filePath = path.join(messagesDir, file);

      try {
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const fileMessages = JSON.parse(fileContents);
        messages = { ...messages, ...fileMessages };
      } catch (error) {
        console.warn(`Failed to load messages from ${filePath}`, error);
      }
    }
  }

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  const messages = await loadMessages(locale as Locale);

  return {
    locale, 
    messages,
  };
});
