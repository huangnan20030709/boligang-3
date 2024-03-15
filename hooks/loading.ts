import { ref } from "vue";

export default function useLoadingIndicator(initValue = false) {
  const loading = ref(initValue);

  const setLoading = (val: boolean) => {
    loading.value = val;
  };

  const toggle = () => {
    loading.value = !loading.value;
  };
  return {
    toggle,
    setLoading,
    loading,
  };
}
