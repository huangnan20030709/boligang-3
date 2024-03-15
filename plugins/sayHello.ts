export default defineNuxtPlugin((nuxtApp: any) => {
  console.log(nuxtApp);

  return {
    provide: {
      sayHello(msg: string) {
        console.log(`hello ${msg}`);
      },
    },
  };
});
