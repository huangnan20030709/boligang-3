// https://github.com/upstash/upstash-redis
import { useRedis } from "../../utils";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const redis = useRedis();

  try {
    await redis.lpush("userList", body);
    return {
      code: 200,
      data: null,
    };
  } catch (error) {
    throw createError({ statusCode: 498, statusMessage: "失败了，addlike" });
  }
});
