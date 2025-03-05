<template>
    <el-button @click="clearFilter">{{ $t("components.clear_filter") }}</el-button>
    <el-table
        ref="tableRef"
        row-key="model"
        :data="tableData"
        border
        :default-sort="{ prop: 'brand', order: 'ascending' }"
    >
        <el-table-column prop="model" :label="$t('components.model')" width="300" />
        <el-table-column
            prop="brand"
            :label="$t('components.brand')"
            column-key="brand"
            width="150"
            sortable
            :filters="filert_vendors[current_lang].filters_hardware_brand.sort(sortValue)"
            :filter-method="filterBrand"
        />
        <el-table-column
            prop="type"
            :label="$t('components.type')"
            width="200"
            :filters="filter_data[current_lang].filters_hardware_type"
            :filter-method="filterType"
            filter-placement="bottom-end"
        >
            <template #default="scope">
                <span v-for="(hardware, index) in filter_data[current_lang].filters_hardware_type" :key="index">
                    <span v-if="scope.row.type == hardware.value">{{ hardware.text }}</span>
                </span>
            </template>
        </el-table-column>
        <el-table-column
            prop="status"
            :label="$t('components.status')"
            width="170"
            :filters="filter_data[current_lang].filters_status"
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
        <el-table-column prop="notes" :label="$t('components.notes')" min-width="200">
            <template #default="scope">
                <span v-if="current_lang == 'en' && scope.row.notes_en">{{ scope.row.notes_en }}</span>
                <span v-else>{{ scope.row.notes }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="link" :label="$t('components.link')" width="60">
            <template #default="scope">
                <span v-if="current_lang == 'en' && scope.row.link_en">
                    <a :href="scope.row.link_en">{{ $t("components.doc_link") }}</a>
                </span>
                <span v-else-if="scope.row.link">
                    <a :href="scope.row.link">{{ $t("components.doc_link") }}</a>
                </span>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
    import { ref } from "vue";

    import databaseJson from "../data/datas.min.json";
    import filter_data from "../data/locales.min.json";
    import filert_vendors from "../data/vendors.min.json"
    const current_lang = document.documentElement.lang;

    const tableRef = ref();

    const clearFilter = () => {
        tableRef.value.clearFilter();
    };

    const filterBrand = (value, row) => {
        return row.brand === value;
    };

    const filterType = (value, row) => {
        return row.type === value;
    };

    const filterStatus = (value, row) => {
        return row.status === value;
    };

    const sortValue = (a, b) => {
        // Convert upper case to sort list
        const upperA = a.value.toUpperCase();
        const upperB = b.value.toUpperCase();

        let result;
        if (upperA < upperB) {
            result = -1;
        } else if (upperA > upperB) {
            result = 1;
        } else {
            result = 0;
        }
        return result;
    };

    const tableData = databaseJson.hardwares;
</script>
