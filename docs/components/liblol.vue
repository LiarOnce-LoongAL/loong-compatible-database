<template>
    <el-button @click="clearFilter">{{ $t("components.clear_filter") }}</el-button>
    <el-table ref="tableRef" row-key="name" :data="tableData" border :default-sort="{ prop: 'id', order: 'ascending' }">
        <el-table-column prop="id" label="ID" width="70" />
        <el-table-column prop="name" :label="$t('components.name')" width="210" />
        <el-table-column prop="version" :label="$t('components.soft_version')" width="180" />
        <el-table-column prop="liblol_version" :label="$t('components.liblol_version')" width="80" />
        <el-table-column prop="date" :label="$t('components.uptimedate')" width="180" />
        <el-table-column
            prop="status"
            :label="$t('components.status')"
            width="110"
            :filters="filter_data[current_lang]?.filters_status || 'zh'"
            :filter-method="filterStatus"
            filter-placement="bottom-end"
        >
            <template #default="scope">
                <Unknown v-if="scope.row.status == 0" />
                <Compatible v-if="scope.row.status == 1" />
                <Partial v-if="scope.row.status == 2" />
                <NewWorld v-if="scope.row.status == 3" />
                <Unsupported v-if="scope.row.status == -1" />
            </template>
        </el-table-column>
        <el-table-column prop="notes" :label="$t('components.notes')" min-width="200" />
        <el-table-column prop="link" :label="$t('components.link')" width="60" />
    </el-table>
</template>

<script setup>
    import { ref } from "vue";

    import databaseJson from "../data/datas.min.json";
    import filter_data from "../data/locales.min.json";
    const current_lang = document.documentElement.lang;

    const tableRef = ref();
    const clearFilter = () => {
        tableRef.value.clearFilter();
    };

    const filterStatus = (value, row) => {
        return row.status === value;
    };

    const tableData = databaseJson.liblol;
</script>
