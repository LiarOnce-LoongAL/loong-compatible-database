---
aside: false
outline: false
---
# 硬件兼容性
此处为社区共同测试后确认的硬件，可用于装机参考。

<HardwaresTagsInfo />

## 注意事项

1. 内存兼容性默认以最新版本固件进行测试，仅可作为参考，且部分主板可能不支持 `ECC` 或 `ECC REG`，是否可以使用 UDIMM/ECC 或 RDIMM 内存需自行询问主板厂商。
2. 嘉合劲威(POWEV)旗下品牌有：光威(GLOWAY)、阿斯加特(Asgard)、酷兽(CUSO)、神可(SINKER)，该数据库则将这些品牌全部归类于嘉合劲威(POWEV)下，不同品牌则会在`架构或系列`中注明。
3. 数据来源：[龙芯3A 6000内存（硬盘、网卡）兼容性汇总(腾讯文档)](https://docs.qq.com/sheet/DUEJNVlhFblhIVElV?tab=BB08J2)、[统信适配清单](https://ecology.chinauos.com/)、[龙芯生态平台](https://loongeco.cn/support/list2)，其中后两者数据可能不准确，需进一步测试。

::: raw
<ClientOnly>
    <HardwaresList />
</ClientOnly>
:::

<script setup>
    import HardwaresTagsInfo from "./components/tags/hardware_tagsinfo.vue"
    import HardwaresList from "./components/hardwares.vue"
</script>