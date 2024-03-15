// import {} from ''

enum API {
  list = "/api/user/list",
}

export default defineEventHandler(() => {
  return [{ name: "hn", age: 18 }];
});
