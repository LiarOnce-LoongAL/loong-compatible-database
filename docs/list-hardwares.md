---
aside: false
outline: false
---
# 硬件兼容性
此处为社区共同测试后确认的硬件，可用于装机参考。

<HardwaresTagsInfo />

## 注意事项

1. 嘉合劲威(POWEV)旗下品牌有：光威(GLOWAY)、阿斯加特(Asgard)、酷兽(CUSO)、神可(SINKER)，该数据库则将这些品牌全部归类于嘉合劲威(POWEV)下，不同品牌则会在`架构或系列`中注明。

::: raw
<ClientOnly>
    <HardwaresList />
</ClientOnly>
:::

<script setup>
    import HardwaresTagsInfo from "./components/tags/hardware_tagsinfo.vue"
    import HardwaresList from "./components/hardwares.vue"
</script>