<template>
    <el-input
        v-model="searchName"
        placeholder="搜索..."
        style="margin-bottom: 20px;"
        @input="handleSearch"
        clearable
    />
</template>

<script setup>
import { ref } from 'vue';

const searchName = ref('');

const emit = defineEmits(['search']);

const handleSearch = () => {
    emit('search', searchName.value);
};
</script>