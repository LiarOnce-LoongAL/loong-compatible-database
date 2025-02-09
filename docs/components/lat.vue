<template>
    <el-button @click="clearFilter">重置筛选</el-button>
    <el-table
        ref="tableRef"
        row-key="name"
        :data="tableData"
        border
        :default-sort="{ prop: 'name', order: 'ascending' }"
    >
        <el-table-column prop="name" label="名称" width="200" />
        <el-table-column prop="vendor" label="厂商" width="160" />
        <el-table-column prop="version" label="软件版本号" width="120">
            <template #defacurrent_langt="scope">
                <span v-if="scope.row.version === 1">多个版本</span>
            </template>
        </el-table-column>
        <el-table-column prop="lat_version" label="LAT 版本号" width="100" />
        <el-table-column prop="latx_or_lata" label="LATX 或 LATA" width="120" />
        <el-table-column prop="date" label="更新日期" width="140">
            <template #default="scope">
                <span v-if="scope.row.date === 1">详见文档</span>
            </template>
        </el-table-column>
        <el-table-column
            prop="status"
            label="兼容状态"
            width="120"
            :filters="filter_data[current_lang]?.filters_status_lat || 'zh'"
            :filter-method="filterStatus"
            filter-placement="bottom-end"
        >
            <template #default="scope">
                <Unknown v-if="scope.row.status == 0" />
                <Compatible v-if="scope.row.status == 1" />
                <Partial v-if="scope.row.status == 2" />
                <Native v-if="scope.row.status == 3" />
                <Unsupported v-if="scope.row.status == -1" />
            </template>
        </el-table-column>
        <el-table-column prop="notes" label="备注" min-width="300" />
        <el-table-column prop="link" label="链接" width="60" />
    </el-table>
</template>

<script setup>
    import { nextTick, ref, getCurrentInstance, onMounted } from "vue";
    const { proxy } = getCurrentInstance();
    import { useI18n } from "vue-i18n";
    const { locale } = useI18n();

    import databaseJson from "../data/datas.min.json";
    import filter_data from "../data/locales.min.json";
    const current_lang = document.documentElement.lang;
    // let current_lang;
    // if (typeof document !== "undefined") {
    //     current_lang = document.documentElement.lang;
    // }

    const tableRef = ref();
    const clearFilter = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        tableRef.value.clearFilter();
    };

    const filterStatus = (value, row) => {
        return row.status === value;
    };

    const tableData = databaseJson.lat;

    nextTick(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("lang", document.documentElement.lang);
            locale.value = localStorage.getItem("lang");
            proxy.$forceUpdate();
        }
    });
</script>
