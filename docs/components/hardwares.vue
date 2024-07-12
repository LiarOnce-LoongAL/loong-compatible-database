<template>
    <el-table ref="tableRef" row-key="model" :data="tableData" border :default-sort="{ prop: 'brand', order: 'ascending' }">
        <el-table-column prop="model" label="型号" width="300" />
        <el-table-column prop="brand" label="品牌" column-key="brand" width="150" sortable />
        <el-table-column prop="type" label="类型" width="200" 
            :filters="filtersJson.filtersHardwareType" 
            :filter-method="filterType" 
            filter-placement="bottom-end"
        >
            <template #default="scope">
                <span v-for="(hardware, index) in filtersJson.filtersHardwareType" :key="index">
                    <span v-if="scope.row.type == hardware.value">{{ hardware.text }}</span>
                </span>
            </template>
        </el-table-column>
        <el-table-column prop="status" label="兼容状态" width="120" 
            :filters="filtersJson.filtersStatus" 
            :filter-method="filterStatus" 
            filter-placement="bottom-end"
        >
            <template #default="scope">
                <el-tag v-if="scope.row.status == 0" type="info">未知</el-tag>
                <el-tag v-if="scope.row.status == 1" type="success">兼容</el-tag>
                <el-tag v-if="scope.row.status == 2" type="warning">有限兼容</el-tag>
                <el-tag v-if="scope.row.status == 3">新世界可用</el-tag>
                <el-tag v-if="scope.row.status == -1" type="danger">不兼容</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="notes" label="备注" min-width="300" />
        <el-table-column prop="link" label="链接" width="60">
            <template #default="scope">
                <span v-if="scope.row.link"><a :href="scope.row.link">文档</a></span>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import { ref } from 'vue'
import databaseJson from '../data/datas.min.json'
import * as filtersJson from './filters' 

const tableRef = ref()

const filterType = (value, row) => {
    return row.type === value
}

const filterStatus = (value, row) => {
    return row.status === value
}

const tableData = databaseJson.hardwares
</script>