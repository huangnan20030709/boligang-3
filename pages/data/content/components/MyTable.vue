<template>
  <div style="margin-top: 10px; max-height: 495px; padding-bottom: 20px">
    <a-table :columns="columns" :data="data" style="height: 500px"> </a-table>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

const columns = computed(() => {
  return [
    {
      title: t("data.content.ranking"),
      dataIndex: "salary",
      sortable: {
        sortDirections: ["ascend", "descend"],
      },
      width: 100,
    },
    {
      title: t("data.content.name"),
      dataIndex: "name",
    },

    {
      title: t("data.content.address"),
      dataIndex: "address",
    },
    {
      title: t("data.content.mailbox"),
      dataIndex: "email",
    },
  ];
});
const data = [
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
];
</script>

<style scoped lang="scss"></style>
