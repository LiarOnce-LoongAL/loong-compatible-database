<template>
    <el-button @click="clearFilter">重置筛选</el-button>
    <el-table ref="tableRef" row-key="model" :data="tableData" border :default-sort="{ prop: 'id', order: 'ascending' }">
        <el-table-column prop="id" label="ID" width="70" />
        <el-table-column prop="name" label="名称" width="210" />
        <el-table-column prop="version" label="软件版本号" width="180" />
        <el-table-column prop="liblol_version" label="LibLoL 版本号" width="80" />
        <el-table-column prop="date" label="更新日期" width="180" />
        <el-table-column prop="status" label="兼容状态" width="110" 
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
        <el-table-column prop="notes" label="备注" min-width="200" />
        <el-table-column prop="link" label="链接" width="60" />
    </el-table>
</template>

<script setup>
import { ref } from 'vue'
import databaseJson from '../data/datas.min.json'
import * as filtersJson from './filters' 

const tableRef = ref()
const clearFilter = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    tableRef.value.clearFilter()
}

const filterStatus = (value, row) => {
    return row.status === value
}

const tableData = databaseJson.liblol
</script>