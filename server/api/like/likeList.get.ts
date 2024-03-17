// https://github.com/upstash/upstash-redis

import { useRedis } from "../../utils";

export default defineEventHandler(async (event) => {
  const redis = useRedis();

  let data;

  try {
    data = await redis.lrange("likeList", 0, 200);
  } catch (error) {
    throw createError({ statusCode: 498, statusMessage: " ---failed to get in /api/username.get.ts--" });
  }

  return data;
});
