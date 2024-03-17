// https://github.com/upstash/upstash-redis
import { useRedis } from "../../utils";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const redis = useRedis();
  let data;

  try {
    data = await redis.lpush("likeList", query);
  } catch (error) {
    throw createError({ statusCode: 498, statusMessage: "失败了，addlike" });
  }

  return data;
});
