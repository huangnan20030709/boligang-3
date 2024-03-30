<template>
  <div>
    <a-table class="mt-4" :columns="columns" :data="data" row-key="id" :row-selection="{
      type: 'checkbox',
      showCheckedAll: true,
    }" :border="false" :pagination="false">
      <template #cover="{ record }">
        <div style="position: relative">
          <img width="120px" :src="record.cover" alt="" />
          <a-tag color="red" style="position: absolute; top: 5px; left: 5px"> {{ $t("data.live.FailAudit") }}</a-tag>
        </div>
      </template>
    </a-table>
    <a-typography-text type="secondary" class="data-statistic-list-tip"> {{ $t("data.live.notVisible") }}
    </a-typography-text>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
import { computed } from "vue";
import type { TableColumnData, TableData } from "@arco-design/web-vue/es/table/interface.d";

interface PreviewRecord {
  cover: string;
  name: string;
  duration: string;
  id: string;
  status: number;
}
const data: PreviewRecord[] = [
  {
    cover: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/c788fc704d32cf3b1136c7d45afc2669.png~tplv-uwbnlip3yd-webp.webp",
    name: "视频直播",
    duration: "00:05:19",
    id: "54e23ade",
    status: -1,
  },
];

// Using the Render function is more flexible than using templates.
// But, cannot bind context and local scopes are also lost

const columns = computed(() => {
  return [
    {
      title: t("data.live.serialNumber"),
      render({ rowIndex }: { record: TableData; column: TableColumnData; rowIndex: number }) {
        return rowIndex + 1;
      },
    },
    {
      title: t("data.live.cover"),
      dataIndex: "cover",
      slotName: "cover",
    },
    {
      title: t("data.live.name"),
      dataIndex: "name",
    },
    {
      title: t("data.live.VideoDuration"),
      dataIndex: "duration",
    },
    {
      title: t("data.live.VideoId"),
      dataIndex: "id",
    },
  ];
});
</script>

<style lang="scss">
// Warning: Here is the global style
.data-statistic {
  &-list {
    &-cover {
      &-wrapper {
        position: relative;
        height: 68px;

        img {
          height: 100%;
        }
      }

      &-tag {
        position: absolute;
        top: 6px;
        left: 6px;
      }
    }

    &-tip {
      display: block;
      margin-top: 16px;
      text-align: center;
    }
  }
}
</style>
