<template>
    <div style="margin: 10px 20px 0px 20px">
        <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
            <div class="flex   w-100 mt-16">
                <div class="basis-1/3 ">
                    <div style="display: flex; align-items: center;">
                        <a-input v-model="inputVal" placeholder="输入署名，默认为@dyh1216"
                            style="width: 270px;margin-right: 10px;margin-left: 30px;" :max-length="10" />
                        <a-button :status="isLike ? 'success' : 'normal'" @click="addLike">
                            <icon-thumb-up-fill />
                        </a-button>
                    </div>

                    <a-list size="small" style="width: 75%;margin-top: 5px;margin-left: 30px; ">
                        <template #header>
                            <span style="font-size: 25px;"> 可选署名</span>
                        </template>
                        <a-list-item class="listitem" @click="inputVal = item" v-for="item in nameList" :key="item">
                            {{ item }}
                        </a-list-item>
                    </a-list>

                </div>

                <div class="basis-2/3 text-left ml-5">
                    <a-tooltip content="手动刷新数据">
                        <a-button type="primary" class="mb-2" @click="refreshCli"><icon-refresh /></a-button>
                    </a-tooltip>
                    <a-table :columns="columns" :data="tableDate" :pagination="pagination">
                    </a-table>
                </div>

            </div>
        </a-card>
    </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'

const inputVal = ref('')
let isLike = ref(false)
const pagination = { pageSize: 3 }
const nameList = ['拳致聋', '黑妞爱狗蛋', '牛顿砸苹果', '舔奶盖的小仙女', '你一生都得不到的人！']
const columns = [

    {
        title: "署名",
        dataIndex: "name",
        width: '100',
        align: 'center'
    },
    {
        title: "时间",
        dataIndex: "date",
        width: '230',
        align: 'center'
    },
];
interface dateItem {
    index: string,
    name: string,
    date: string
}
const tableDate = ref<dateItem[]>([]);

let refFN
const getTableData = async () => {
    const { data, refresh } = await useLazyFetch('/api/like/likeList')
    refFN = refresh
    tableDate.value = data.value
}
const addLike = async () => {
    if (isLike.value) {
        Message.info({ content: '您已经点过赞啦，谢谢您！' })
        return
    }

    await useFetch('/api/like/addLike', {
        method: 'POST',
        query: {
            name: inputVal.value.trim() == '' ? '@dyh1216' : inputVal.value.trim(),
            date: dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        }
    })
    Message.success({ content: '谢谢你的点赞！' })
    getTableData()
    isLike.value = true
}
const refreshCli = async () => {

    await getTableData()
    Message.success({ content: '数据刷新成功' })

}

onMounted(() => {
    nextTick(() => {
        getTableData()
    })
})
</script>

<style scoped lang="scss">
.listitem {
    font-size: 14px;
    cursor: pointer;

}

.listitem:hover {
    background-color: #eee;
}
</style>