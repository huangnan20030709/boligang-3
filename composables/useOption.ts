import type { EChartsOption } from "echarts";
import useAppStore from "@/store/modules/Topic";

// for code hints
// import { SeriesOption } from 'echarts';
// Because there are so many configuration items, this provides a relatively convenient code hint.
// When using vue, pay attention to the reactive issues. It is necessary to ensure that corresponding functions can be triggered, TypeScript does not report errors, and code writing is convenient.
interface optionsFn {
  (isDark: boolean): EChartsOption;
}
export const useOption = (sourceOption: optionsFn) => {
  const appStore = useAppStore();

  const isDark = computed(() => {
    return appStore.currentTopic === "dark";
  });
  // echarts support https://echarts.apache.org/zh/theme-builder.html
  // It's not used here
  // TODO echarts themes
  const option = computed<EChartsOption>(() => {
    return sourceOption(isDark.value);
  });

  return {
    option,
  };
};
