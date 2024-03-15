// import {} from ''

enum API {
  list = "/api/user/list",
}

export default defineEventHandler(async () => {
  return [{ name: "hn", age: 18 }];
});
