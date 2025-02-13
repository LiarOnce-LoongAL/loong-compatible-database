<template>
    <el-button @click="clearFilter">{{ $t("components.clear_filter") }}</el-button>
    <el-table
        ref="tableRef"
        row-key="name"
        :data="tableData"
        border
        :default-sort="{ prop: 'name', order: 'ascending' }"
    >
        <el-table-column prop="name" :label="$t('components.name')" width="200" />
        <el-table-column prop="vendor" :label="$t('components.vendor')" width="160" />
        <el-table-column prop="version" :label="$t('components.soft_version')" width="120">
            <template #default="scope">
                <span v-if="scope.row.version === 1">{{ $t('components.multi_version') }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="lat_version" :label="$t('components.lat_version')" width="100" />
        <el-table-column prop="latx_or_lata" :label="$t('components.latx_or_lata')" width="120" />
        <el-table-column prop="date" :label="$t('components.uptimedate')" width="140">
            <template #default="scope">
                <span v-if="scope.row.date === 1">{{ $t('components.seeindoc') }}</span>
            </template>
        </el-table-column>
        <el-table-column
            prop="status"
            :label="$t('components.status')"
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
        <el-table-column prop="notes" :label="$t('components.notes')" min-width="300" />
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

    const tableData = databaseJson.lat;
</script>
