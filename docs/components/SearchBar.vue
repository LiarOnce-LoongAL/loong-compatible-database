<template>
    <el-row :gutter="4" class="search_bar">
        <el-col :span="18">
            <el-input v-model="search_name" placeholder="仅支持搜索型号/名称 (功能不完善，请先忽略)" />
        </el-col>
        <el-col :span="2">
            <el-button type="primary">搜索</el-button>
        </el-col>
    </el-row>
   
</template>

<script setup>
import { ref } from 'vue';

let search_name = ref("")
const tableRef = ref()

// const resetDateFilter = () => {
//     tableRef.value.clearFilter(['date'])
// }

</script>

<style scoped>
.search_bar {
    margin: 10px 0;
}
</style>