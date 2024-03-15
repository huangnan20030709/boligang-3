import dayjs from "dayjs";

/**
 *
 * @params passtime
 */
export default function (time) {
  if (time) {
    return dayjs(new Date().getTime() - time).format("YYYY-MM-DD");
  } else {
    return dayjs(new Date().getTime()).format("YYYY-MM-DD");
  }
}
