import type { Locale } from "./locales";

type Messages = {
  title: string;
  status: string;
};

export const messages: Record<Locale, Messages> = {
  ko: {
    title: "Monave",
    status: "준비 중입니다.",
  },
  en: {
    title: "Monave",
    status: "Coming soon.",
  },
};
