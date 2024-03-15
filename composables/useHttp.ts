export const fetchConfig = {
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  headers: {
    appid: "bdcc01ecc75dbbaaefce",
  },
};

//请求体封装
function useGetSameOptions(options: any = {}) {
  options.baseURL = options.baseURL ?? fetchConfig.baseURL;
  options.headers = options.headers ?? {
    appid: fetchConfig.headers.appid,
  };
  options.initialCache = options.initialCache ?? false;
  options.lazy = options.lazy ?? false;

  // 用户登录，默认传token
  const token = useCookie("token");

  if (token.value) {
    options.headers.token = token.value;
  }

  return options;
}

//http请求封装
export async function useHttp(key: string, url: string, options: any = {}) {
  options = useGetSameOptions(options);
  options.key = key;

  if (options.$) {
    const data = ref(null);
    const error = ref(null);
    return await $fetch(url, options)
      .then((res: any) => {
        data.value = res.data;
        return { data, error };
      })
      .catch((err) => {
        const msg = err?.data?.data;
        if (process.client) {
          Message.warning({ content: "服务端错误" });
        }
        error.value = msg;
        return { data, error };
      });
  }

  let res: any = await useFetch(url, {
    ...options,
    // 相当于响应拦截器
    // transform: (res: any) => {
    //   return res.data;
    // },
  });

  // return res;

  if (res.data.value.code == "1") {
    return res.data.value.result;
  }

  // 客户端错误处理
  if (process.client && res.error.value) {
    if (!options.lazy) {
      Message.warning({ content: "服务端错误" });
    }
  }
}

// GET请求
export function useHttpGet(key: string, url: string, options: any = {}) {
  options.method = "GET";
  return useHttp(key, url, options);
}

// POST请求
export function useHttpPost(key: string, url: string, options: any = {}) {
  options.method = "POST";
  return useHttp(key, url, options);
}
