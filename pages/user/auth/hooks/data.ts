export const xData = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

let createObj = function () {
  return Math.floor(Math.random() * 90 + 15);

  // return {
  //   h6: Math.floor(Math.random() * 90 + 1),
  //   h12: Math.floor(Math.random() * 60 + 1),
  //   h18: Math.floor(Math.random() * 90 + 1),
  //   h24: Math.floor(Math.random() * 100 + 1),
  //   count() {
  //     return this.h6 + this.h12 + this.h18 + this.h24;
  //   },
  // };
};
let arr: any = [];
for (let i = 0; i < 32; i++) {
  arr[i] = createObj();
}

export const yData = arr;
