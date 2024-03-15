export function useGetGithubUserList() {
  return useHttpGet("github", "/home/category/head", {
    server: false,
  });
}
