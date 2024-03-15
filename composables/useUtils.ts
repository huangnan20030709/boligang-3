export function useEnterEvent(cb: Function) {
  const handleEnterEvent = (e: any) => {
    if (e.key == "Enter") {
      cb();
      e.preventDefault();
    }
  };
  onMounted(() => {
    document.addEventListener("keydown", handleEnterEvent);
  });
  onUnmounted(() => {
    document.removeEventListener("keydown", handleEnterEvent);
  });
}
