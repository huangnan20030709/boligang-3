export default {
  "problem.bigTitle": "Frequently Asked Question ",

  "problem.1-title": "Who maintains Vue?",
  "problem.1-text1":
    "Vue is an independent, community-driven project. It was created by Yu Yu Xi in 2014 as his personal project. Today, Vue is actively maintained by a team of full-time members and volunteers from all over the world, with Yu Yuxi as the project leader. You can learn more about Vue's story in this documentary.",
  "problem.1-text2":
    "Since 2016, Vue's growth has been secured primarily through sponsorship and we are financially sustainable. If you or your business benefits from Vue, please consider sponsoring us to support Vue's growth!",

  "problem.2-title": "What is the difference between Vue 2 and Vue 3?",
  "problem.2-text1":
    "Vue 3 is the latest current major release of Vue. It includes some new features that were not available in Vue 2 (such as Teleport, Suspense, and multiple element templates). It also contains some changes that are incompatible with Vue 2. Refer to the Vue 3 Migration Guide for detailed documentation.",
  "problem.2-text2":
    "Despite the differences, most Vue apis are shared between the two big versions, so most of your Vue 2 knowledge will continue to work in Vue 3. It is important to note that the composable API was originally a Vue 3 unique feature, but is now compatible with Vue 2 and available in Vue 2.7. ",
  "problem.2-text3":
    "Overall, Vue 3 offers a smaller package size, better performance, better scalability, and better TypeScript/IDE support. If you want to start a new project now, we recommend you choose Vue 3. But there are still some reasons to consider using Vue 2: ",
  "problem.2-li1": "You need to support IE11. Vue 3 uses some modern JavaScript features that IE11 does not support.",
  "problem.2-text4": "If you plan to migrate your existing Vue 2 app to Vue 3, consult the migration guide.",

  "problem.3-title": "Is Vue 2 still being maintained?",
  "problem.3-text1":
    "Vue 2 released its last minor version (2.7) in June 2022. Vue 2 is currently in maintenance mode: it will no longer offer new features, but it will continue to be released for major bug fixes and security updates for 18 months from the release date of 2.7. This means that Vue 2 will reach its maintenance expiration date on December 31, 2023.",
  "problem.3-text2":
    "We believe this will give most ecosystems long enough to migrate to Vue 3.However, we also understand that there may be teams or projects that cannot upgrade on this timeline that still need to meet their security and compliance needs. Were working with industry experts to provide extended support for Vue 2 for teams that need it - if your team expects to continue using Vue 2 beyond the end of 2023, make sure to plan ahead, as described in the Vue 2 Extended LTS.",

  "problem.4-title": "What open source protocol does Vue use?",
  "problem.4-text1": "Vue is a completely free open source project and is released under the MIT License.",

  "problem.5-title": "Which browsers does Vue support?",
  "problem.5-text1":
    "The latest version of Vue (3.x) only supports browsers that natively support ES2015. This does not include IE11. The ES2015 features used by Vue 3.x are not compatible with older browsers, so if you need support for older browsers, please use Vue 2.x instead.",

  //
  "problem.6-title": "Is Vue reliable?",
  "problem.6-text1":
    "Vue is a mature, battle-tested framework. It is one of the most widely used JavaScript frameworks in production today, with over 1.5 million users worldwide and over 10 million monthly downloads on npm. ",
  "problem.6-text2":
    "Vue is used in production by well-known and diverse organizations around the world, including Wikimedia Foundation, NASA, Apple, Google, Microsoft, GitLab, Zoom, Tencent, Weibo, Bilibili, Kuaishou, and many more.",

  "problem.7-title": "Is Vue fast?",
  "problem.7-text1":
    "Vue 3 is one of the most powerful mainstream front-end frameworks and can easily handle most web application scenarios with almost no manual optimization required.",
  "problem.7-text2":
    "In terms of running score, Vue performs much better in js-framework-benchmark than React and Angular. In this benchmark, it also tied with some of the fastest levels of non-virtual DOM frameworks in production. ",
  "problem.7-text3":
    "Note that runs like the one above focus on the optimization of raw render performance in specific situations and are therefore not fully representative of real-world performance results. If you are more interested in page loading performance, please test this site with WebPageTest or PageSpeed Insights. This documentation site is a single-page application built entirely by Vue itself, pre-rendered by static generation and hydration on the client side. It achieves a performance score of 100 while emulating the Moto G4 + low-speed 4G network with a 4x CPU slowdown.",
  "problem.7-text4":
    "You can learn more about how Vue automatically optimizes runtime performance in the Rendering Mechanics section, or you can learn how to optimize Vue applications in particularly demanding situations in the Performance Optimization Guide. Question",

  "problem.8-title": "Is Vue small?",
  "problem.8-text1":
    "Many of Vue's apis are tree-shakable when you use them through build tools. For example, if you don't use the built-in <Transition> component, it won't be included in the final production package. ",
  "problem.8-text2":
    "For a hello world app with minimal API usage from Vue, with minimization and brotli compression, the baseline size is only about 16kb. But the actual application size depends on how much of the framework's optional features you use. In extreme cases, if an application uses every feature Vue offers, the total runtime size is about 27kb.",
  "problem.8-text3":
    "If we don't use Vue through the build tool, not only do we lose tree-shaking, but we also have to load the template compiler into the browser. This increases the package size to about 41kb. Therefore, if you are using Vue without a build step for progressive enhancement, consider using petite-vue (only 6kb) instead.",
  "problem.8-text4":
    "Some frameworks such as Svelte use a compilation strategy that produces extremely lightweight output for individual components. However, our research shows that the difference in package size is largely dependent on the number of components in the application. While Vue's baseline size is heavier, it generates less code per component. In a real-world scenario, Vue applications are likely to end up lighter. Can Vue handle large-scale scenarios?",

  "problem.9-title": "Can Vue handle large-scale scenarios?",
  "problem.9-text1":
    "Yes. Despite the misconception that Vue is only suitable for simple scenarios, Vue is fully capable of handling large-scale applications:",
  "problem.9-li1":
    "Single-file components provide a modular development model so that different parts of an application can be developed in isolation.",
  "problem.9-li2":
    "The composable API provides best-in-class TypeScript integration and provides a concise pattern for organizing, extracting, and reusing complex logic.",
  "problem.9-li3": "Comprehensive toolchain support keeps the development experience smooth as your app grows.",
  "problem.9-li4": "The low barrier to entry and excellent documentation can . ",

  "problem.10-title": "Can I contribute to Vue?",
  "problem.10-text1": "Very welcome! Please read our community guide.",

  "problem.11-title": "Should I use an optional API or a composite API?",
  "problem.11-text1": "If you're new to Vue, we've provided a macro comparison between the two here.",
  "problem.11-text2": "If you have used the optional API in the past and are evaluating the composite API, check out the Composite API FAQs.",

  "problem.12-title": "Should I choose JS or TS when using Vue?",
  "problem.12-text1":
    "While Vue itself is implemented in TypeScript and provides first-class TypeScript support, it does not mandate that users use TypeScript.",
  "problem.12-text2":
    "TypeScript support is an important consideration when adding new features to Vue. Even if you don't use TypeScript yourself, API designs that consider TypeScript support are generally easier to analyze by ides and static analysis tools, so it's good for everyone. Vue's API design also works the same way in JavaScript and TypeScript as possible.",
  "problem.12-text3":
    "Choosing TypeScript involves a trade-off between the complexity of getting started and the benefits of long-term maintainability. Whether this trade-off makes sense depends on the background of your team and the size of your project, but Vue doesn't really factor into that decision.",

  "problem.13-title": "How exactly does Vue compare to Web Components?",
  "problem.13-text1":
    "Vue was created before Web Components, and some aspects of Vue's design (such as slots) are inspired by the Web Components model.",
  "problem.13-text2":
    "The Web Components specifications are relatively low-level because they are centered around custom elements. As a framework, Vue addresses more high-level issues such as efficient DOM rendering, responsive state management, toolchains, client-side routing, and server-side rendering. ",
  "problem.13-text3":
    "Vue fully supports using native custom elements in Vue Components, as well as exporting Vue components as native custom elements - see the Vue and Web Components guides for more details.",
};
