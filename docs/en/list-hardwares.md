---
aside: false
outline: false
---
# Hardware Compatibility

Here is the hardware list confirmed after joint testing by the community and can be used for installation reference.

<HardwaresTagsInfo />

## Notice

1. Memory compatibility is tested with the latest firmware version by default and can only be used as a reference, some motherboards may not support `ECC` or `ECC REG`, so you need to ask the manufacturer if you want to use UDIMM/ECC or RDIMM memory.
2. POWEV's brands include: GLOWAY, Asgard, CUSO, and SINKER, all of which are categorized under POWEV in the database, with different brands noted in the `Arch or Series'.
3. Partial data sources: [龙芯3A6000内存（硬盘、网卡）兼容性汇总 (Tencent Docs)](https://docs.qq.com/sheet/DUEJNVlhFblhIVElV?tab=BB08J2)、[UOS Ecology](https://ecology.chinauos.com/)、[Loongson Ecosystem](https://loongeco.cn/support/list2). The latter two of these data may be inaccurate and require further testing.

::: raw
<ClientOnly>
    <HardwaresList />
</ClientOnly>
:::

<script setup>
    import HardwaresTagsInfo from "../.vitepress/theme/components/tags/hardware_tagsinfo.vue"
    import HardwaresList from "../.vitepress/theme/components/hardwares.vue"
</script>
