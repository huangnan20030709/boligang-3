<template>
  <a-card class="general-card" :title="$t('monitor.studioStatus.title.studioStatus')">
    <template #extra>
      <a-tag color="green">{{ $t("monitor.studioStatus.smooth") }} </a-tag>
    </template>

    <a-descriptions layout="horizontal" :data="dataStatus" :column="2">
      <template #label="{ label }">
        <span v-if="['mainstream', 'hotStandby', 'coldStandby'].includes(label)">
          <a-typography-text style="display: block; width: 45px">
            {{
              label == "mainstream"
                ? $t("monitor.studioStatus.mainstream")
                : label == "hotStandby"
                ? $t("monitor.studioStatus.hotStandby")
                : $t("monitor.studioStatus.coldStandby")
            }}
          </a-typography-text>
          {{ $t("monitor.studioStatus.bitRate") }}
        </span>
        <span v-else>{{ label }}</span>
      </template>
    </a-descriptions>

    <a-typography-title style="margin-bottom: 16px" :heading="6"> {{ $t("monitor.studioStatus.title.pictureInfo") }} </a-typography-title>

    <a-descriptions layout="horizontal" :data="dataPicture" :column="2" />
  </a-card>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const dataStatus = computed(() => [
  {
    label: "mainstream",
    value: "6 Mbps",
  },
  {
    label: t("monitor.studioStatus.frameRate"),
    value: "60",
  },
  {
    label: "hotStandby",
    value: "6 Mbps",
  },
  {
    label: t("monitor.studioStatus.frameRate"),
    value: "60",
  },
  {
    label: "coldStandby",
    value: "6 Mbps",
  },
  {
    label: t("monitor.studioStatus.frameRate"),
    value: "60",
  },
]);
const dataPicture = computed(() => [
  {
    label: t("monitor.studioStatus.line"),
    value: t("monitor.studioStatus.hotStandby"),
  },
  {
    label: "CDN",
    value: "KS",
  },
  {
    label: t("monitor.studioStatus.play"),
    value: "FLV",
  },
  {
    label: t("monitor.studioStatus.pictureQuality"),
    value: t("monitor.studioStatus.Quality"),
  },
]);
</script>

<style scoped lang="scss">
:deep(.arco-descriptions-item-label) {
  padding-right: 6px;
}
</style>
