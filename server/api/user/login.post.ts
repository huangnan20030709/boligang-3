// https://github.com/upstash/upstash-redis
import { useRedis } from "../../utils";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const redis = useRedis();
  try {
    let userList = await redis.lrange("userList", 0, 200);
    let user = userList.find((item: any) => item.name == body.name && item.postbox == body.postbox);
    if (user) {
      return { data: user, code: 200 };
    } else {
      return { data: null, code: 201 };
    }
  } catch (error) {
    throw createError({ statusCode: 498, statusMessage: "失败了，addlike" });
  }
});
