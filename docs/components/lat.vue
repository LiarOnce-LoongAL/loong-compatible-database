<template>
    <el-button @click="clearFilter">重置筛选</el-button>
    <el-table ref="tableRef" row-key="name" :data="tableData" border :default-sort="{ prop: 'name', order: 'ascending' }">
        <el-table-column prop="name" label="名称" width="300" />
        <el-table-column prop="version" label="软件版本号" width="140" />
        <el-table-column prop="lat_version" label="LAT 版本号" width="200" />
        <el-table-column prop="latx_or_lata" label="LATX 或 LATA" width="120" />
        <el-table-column prop="date" label="更新日期" width="140" />
        <el-table-column prop="status" label="兼容状态" width="120" 
            :filters="filtersJson.filtersLatStatus" 
            :filter-method="filterStatus" 
            filter-placement="bottom-end"
        >
            <template #default="scope">
                <el-tag v-if="scope.row.status == 0" type="info">未知</el-tag>
                <el-tag v-if="scope.row.status == 1" type="success">兼容</el-tag>
                <el-tag v-if="scope.row.status == 2" type="warning">有限兼容</el-tag>
                <el-tag v-if="scope.row.status == 3">原生可用</el-tag>
                <el-tag v-if="scope.row.status == -1" type="danger">不兼容</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="notes" label="备注" min-width="300" />
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

const tableData = databaseJson.lat
</script>