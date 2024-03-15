export default defineEventHandler(async (event: any) => {
  let query = getQuery(event);
  let res = await $fetch("https://api.github.com/search/users?q=" + (query.keyword || "nan"));

  return res;
});
