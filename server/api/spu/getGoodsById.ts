export default defineEventHandler(async (event: any) => {
  let query = getQuery(event);
  let res = await $fetch("http://pcapi-xiaotuxian-front-devtest.itheima.net/goods?id=" + query.id);

  return res;
});
