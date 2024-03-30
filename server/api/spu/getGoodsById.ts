export default defineEventHandler(async (event: any) => {
  let query = getQuery(event);
  let res = await $fetch("https://pcapi-xiaotuxian-front-devtest.itheima.net/goods?id=" + query.id);

  return res;
});
