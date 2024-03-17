import { Redis } from "@upstash/redis";

export function useRedis() {
  const redis = new Redis({
    url: "https://apn1-social-bonefish-33616.upstash.io",
    token: process.env.REDIS_TOKEN,
  });

  return redis;
}
