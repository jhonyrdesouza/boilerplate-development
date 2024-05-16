import { locales } from "@/plugins/i18n/config";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../plugins/i18n/locales/${locale}.json`)).default,
  };
});
