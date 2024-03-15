<template>
  <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
    <div class="flex items-center justify-between">
      <h2 class="text-lg" style="color: #000">{{ $t("data.multiple.subjectMatterDistribution") }}</h2>
    </div>
    <div style="width: 100%; height: 220px">
      <client-only>
        <Chart :option="option"></Chart>
      </client-only>
    </div>
  </a-card>
</template>
<script setup lang="ts">
const { t } = useI18n();
const value1 = [5000, 7000, 5000, 2000, 3333, 8000];
const value2 = [6500, 5000, 4000, 5500, 4000, 2100];
const value3 = [6500, 5000, 8000, 5500, 4000, 7000];

const { option } = useOption(() => {
  return {
    backgroundColor: "#fff",
    tooltip: {
      backgroundColor: "rgba(47,63,79,0.8)",
      borderWidth: 0,
      textStyle: {
        color: "#DAECFF",
      },
    },
    legend: {
      right: "0",
      top: "75",
      orient: "vertical",
      itemWidth: 12,
      itemHeight: 12,
      textStyle: { color: "#000" },
      data: [
        {
          name: t("data.multiple.PlainText"),
          icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAWBJREFUOE+lk0Fu1TAQhr9xbE8FWEKCbml6E44C12DDUbgK54BKzQaxaVrUvKpqw8uPbKInvYhNqTdOJvlm/n88ttef1aeZ9zxxzYmvdvpJHxT48kQWMz4e4H3gcR+ZFIQFkIF1oCAzqzuq8e7WSvdg+Qh+MI27F8tAArJMGZmD2juyJJND+RbP/MreHsOLxp2WQRnwBkASluEQi6j86Hq/2cIz43S/H8gB0vIXzqiqWJ9brFzFM5/YVL5jnH5psNQqVcmmvFBtWBZVMslU7sK539ubY9m3jNPPFW4/LuABDgmQElaW0Pu8ha8Zp0suyVjzmVD13hpVm+bVSqBEeudf8AVDO++wdjjKcBOu0JJVz4Xe4xa+Ydx9Z6jni6BudJiiZMmQC7KpnNL7ybZhVfYFQxsItfqHPG1o4gq/07m/2lTezzz+npgqZYZJtf66moz6AdJLSkgcT9h/zfZzbtUfvwLMqcX+td0AAAAASUVORK5CYII=",
        },
        {
          name: t("data.multiple.video"),
          icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAlJJREFUOE9NU01r1VAQPZOk0uZ+ZOWiu67ezr27vqVrf0G6dS/4U0SEQMEKFQQRLIjSLHShGzdCMf20tH1tbbF9fX3NS3LvyCSt7ZBhZu7cM2dmyCWsDeaAsI9WXGduRMIwvI7a4O6dnKbXjtOaOXNgyCdCRJCAQRBPpE0xQ1IsAfMC3S9O0gmQVWV5cW94NoiiCGEUIgxChGGEaCpq/UDOiLBfu9mRZwPvF2hu4yRtKMjc4UEx++NrbpQinSSIjWGjDJTWZLRhZRLMxNN4fjTsF2XVA1FKD7aHaU0+mwz2C/t9NVfaQhvTqlKarDWslSatEswYzS+Oz/vrZd3jIEjp4e4wbUDZ+GC3wJdPubFysWOyWkNJIS3FLJQ1ePnnol9Mmo750WCUTjjIzva2i6vVlbxl1BbGGtJKQ5uEBdwV0cjOq/56WfVYZn58fJXWjOx0d7s4+vg+19bA6LZNNknHqoyGjoU9weJIwE2PA0opPanabR/tbBZbH97mxlhIARW3rF2hxLKKFRlt8ar088XE9dptPxk2aeMp29taL36+W/7ftlYK2iayNBhrScv2Y0VLdTi/Ublu5qdDThtC9nuzKL69WcplKVp18wkoVoaNzCvnscaym+q3YA4WWjACZHubRfH59WLXtlZQYmVO2cHNmbJYCWf6vyrfc87dgsvx6OJ0cDiQf7kmkAsiboIAojUIDYkfYcA0+9d7U7K/Bd99D5VnjEWdw9iJf2M9xk7UYcI+pWdXPOdqXL+q2xKlcyjhcenQgksHXDqHy9pjDMkh/wf/UTbB8BqBawAAAABJRU5ErkJggg==",
        },
        {
          name: t("data.multiple.GraphicClass"),
          icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAlJJREFUOE9NU01r1VAQPZOk0uZ+ZOWiu67ezr27vqVrf0G6dS/4U0SEQMEKFQQRLIjSLHShGzdCMf20tH1tbbF9fX3NS3LvyCSt7ZBhZu7cM2dmyCWsDeaAsI9WXGduRMIwvI7a4O6dnKbXjtOaOXNgyCdCRJCAQRBPpE0xQ1IsAfMC3S9O0gmQVWV5cW94NoiiCGEUIgxChGGEaCpq/UDOiLBfu9mRZwPvF2hu4yRtKMjc4UEx++NrbpQinSSIjWGjDJTWZLRhZRLMxNN4fjTsF2XVA1FKD7aHaU0+mwz2C/t9NVfaQhvTqlKarDWslSatEswYzS+Oz/vrZd3jIEjp4e4wbUDZ+GC3wJdPubFysWOyWkNJIS3FLJQ1ePnnol9Mmo750WCUTjjIzva2i6vVlbxl1BbGGtJKQ5uEBdwV0cjOq/56WfVYZn58fJXWjOx0d7s4+vg+19bA6LZNNknHqoyGjoU9weJIwE2PA0opPanabR/tbBZbH97mxlhIARW3rF2hxLKKFRlt8ar088XE9dptPxk2aeMp29taL36+W/7ftlYK2iayNBhrScv2Y0VLdTi/Ublu5qdDThtC9nuzKL69WcplKVp18wkoVoaNzCvnscaym+q3YA4WWjACZHubRfH59WLXtlZQYmVO2cHNmbJYCWf6vyrfc87dgsvx6OJ0cDiQf7kmkAsiboIAojUIDYkfYcA0+9d7U7K/Bd99D5VnjEWdw9iJf2M9xk7UYcI+pWdXPOdqXL+q2xKlcyjhcenQgksHXDqHy9pjDMkh/wf/UTbB8BqBawAAAABJRU5ErkJggg==",
        },
      ],
    },
    radar: {
      name: {
        textStyle: {
          color: "#000",
          fontSize: 14,
          padding: [-8, -8],
        },
      },
      // 分隔区域配置项
      splitArea: {
        show: true,
        areaStyle: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      // 分割线
      splitLine: {
        lineStyle: {
          color: "rgba(7, 7, 7, 0.3)",
        },
      },
      // 坐标轴轴线相关设置
      axisLine: {
        lineStyle: {
          color: "rgba(0, 0, 0, 0.5)",
        },
      },
      indicator: [
        { name: t("data.multiple.internation"), max: 8000 },
        { name: t("data.multiple.Finance"), max: 8000 },
        { name: t("data.multiple.Science"), max: 8000 },
        { name: t("data.multiple.other"), max: 8000 },
        { name: t("data.multiple.Physical"), max: 8000 },
        { name: t("data.multiple.recreation"), max: 8000 },
      ],
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: value1,
            name: t("data.multiple.PlainText"),
            symbol: "none",
            areaStyle: {
              normal: {
                color: "rgba(0, 71, 255, 1)",
                opacity: 0.4,
              },
            },
            lineStyle: {
              width: 1,
              color: "rgba(0, 71, 255, 1)",
            },
          },
          {
            value: value2,
            name: t("data.multiple.video"),
            symbol: "none",
            areaStyle: {
              normal: {
                color: "rgba(142, 244, 253, 1)",
                opacity: 0.4,
              },
            },
            lineStyle: {
              width: 1,
              color: "rgba(142, 244, 253, 1)",
            },
          },
          {
            value: value3,
            name: t("data.multiple.GraphicClass"),
            symbol: "none",
            areaStyle: {
              normal: {
                color: "rgba(42, 44, 53, 1)",
                opacity: 0.4,
              },
            },
            lineStyle: {
              width: 1,
              color: "rgba(42, 44, 53, 1)",
            },
          },
        ],
      },
    ],
  };
});
</script>

<style scoped lang="scss"></style>
