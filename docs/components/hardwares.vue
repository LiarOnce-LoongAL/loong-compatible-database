<template>
    <el-button @click="clearFilter">{{ $t('components.clear_filter') }}</el-button>
    <el-table ref="tableRef" row-key="model" 
        :data="tableData" border
        :default-sort="{ prop: 'brand', order: 'ascending' }"
    >
        <el-table-column prop="model" :label="$t('components.model')" width="300" />
        <el-table-column prop="brand" :label="$t('components.brand')" column-key="brand" width="150" sortable 
            :filters="filtersHardwareBrand" 
            :filter-method="filterBrand" 
        />
        <el-table-column prop="type" :label="$t('components.type')" width="200" 
            :filters="filtersHardwareType" 
            :filter-method="filterType" 
            filter-placement="bottom-end"
        >
            <template #default="scope">
                <span v-for="(hardware, index) in filtersHardwareType" :key="index">
                    <span v-if="scope.row.type == hardware.value">{{ hardware.text }}</span>
                </span>
            </template>
        </el-table-column>
        <el-table-column prop="status" :label="$t('components.status')" width="170" 
            :filters="filtersStatus" 
            :filter-method="filterStatus"
            filter-placement="bottom-end"
        >
            <template #default="scope">
                <el-tag v-if="scope.row.status == 0" type="info">{{ $t('status.unknown') }}</el-tag>
                <el-tag v-if="scope.row.status == 1" type="success">{{ $t('status.compatible') }}</el-tag>
                <el-tag v-if="scope.row.status == 2" type="warning">{{ $t('status.partial') }}</el-tag>
                <el-tag v-if="scope.row.status == 3">{{ $t('status.new_world') }}</el-tag>
                <el-tag v-if="scope.row.status == -1" type="danger">{{ $t('status.unsupported') }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="notes" :label="$t('components.notes')" min-width="200" />
        <el-table-column prop="link" :label="$t('components.link')" width="60">
            <template #default="scope">
                <span v-if="scope.row.link"><a :href="scope.row.link">{{ $t('components.doc_link') }}</a></span>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import { nextTick, ref, getCurrentInstance, onMounted } from 'vue'
const { proxy } = getCurrentInstance()
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

import databaseJson from '../data/datas.min.json'

import { filtersHardwareBrand, filtersHardwareType, filtersStatus } from './filters.js'
// let filtersJson

const tableRef = ref()

const clearFilter = () => {
    tableRef.value.clearFilter()
}

const filterBrand = (value, row) => {
    return row.brand === value
}

const filterType = (value, row) => {
    return row.type === value
}

const filterStatus = (value, row) => {
    return row.status === value
}

const tableData = databaseJson.hardwares

nextTick(() => {
    // Used for execute switch language after insert "lang" in <html>
    if (typeof window !== "undefined") {
        // Determine if the "window" exists to allow Vite to build smoothly
        // There's black magic on the front end, too!!!
        localStorage.setItem('lang', document.documentElement.lang)
        locale.value = localStorage.getItem('lang')
        proxy.$forceUpdate()
        // console.log(proxy)
    }
})
</script>