import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Message } from "@arco-design/web-vue";

export default function useLocale() {
  const i18 = useI18n();

  const currentLocale = computed(() => {
    return i18.locale.value;
  });

  const changeLocale = (value: string, isFirst: boolean = false) => {
    i18.locale.value = value;
    window.localStorage.setItem("locale", value);
    isFirst != true &&
      Message.success({
        id: "swichLocale",
        content: i18.t("app.header.swichSuccess"),
      });
  };

  const fetchLocale = () => {
    changeLocale(window.localStorage.getItem("locale") || "zh-CN", true);
  };
  return {
    currentLocale,
    changeLocale,
    fetchLocale,
  };
}
