<template>
    <p><el-tag type="info">{{ $t('status.unknown') }}</el-tag><span>：{{ $t('status_taginfo_hardware.unknown') }}</span></p>
    <p><el-tag type="success">{{ $t('status.compatible') }}</el-tag><span>：{{ $t('status_taginfo_hardware.compatible') }}</span></p>
    <p><el-tag type="warning">{{ $t('status.partial') }}</el-tag><span>：{{ $t('status_taginfo_hardware.partial') }}</span></p>
    <p><el-tag>{{ $t('status.new_world') }}</el-tag><span>：{{ $t('status_taginfo_hardware.new_world') }}</span></p>
    <p><el-tag type="danger">{{ $t('status.unsupported') }}</el-tag><span>：{{ $t('status_taginfo_hardware.unsupported') }}</span></p>
</template>
<script setup>

</script>