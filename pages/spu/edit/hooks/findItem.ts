export default function (arr: any, keyword: string, keys: string[]) {
  let res: any = [];
  keys.forEach((key) => {
    arr.forEach((itemObj: any) => {
      if ((itemObj[key] + "").indexOf(keyword) != -1) {
        if (!res.includes(itemObj)) {
          res.push(itemObj);
        }
      }
    });
  });

  return res;
}
