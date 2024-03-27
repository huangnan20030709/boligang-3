// https://github.com/upstash/upstash-redis
import { useRedis } from "../../utils";

export default defineEventHandler(async () => {
  const redis = useRedis();
  try {
    let userList = await redis.lrange("userList", 0, 200);
    return { code: 200, data: userList };
  } catch (error) {
    throw createError({ statusCode: 498, statusMessage: "失败了，addlike" });
  }
});
