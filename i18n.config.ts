import "default-passive-events";

import en from "./lacale/en";
import zh from "./lacale/zh";

export default defineI18nConfig(() => ({
  legacy: false, // 是否兼容之前
  defaultLocale: "en-US",
  messages: {
    "en-US": en,
    "zh-CN": zh,
  },

  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  fallbackWarn: false,
}));
