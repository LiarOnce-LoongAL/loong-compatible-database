---
outline: deep
aside: false
prev: false
next: false
---
# CPU 对比

::: raw
<ClientOnly>
    <CpuCompare :cpuData="cpuData" />
</ClientOnly>
:::

<script>
import CpuCompare from '../../.vitepress/theme/components/compare/CpuCompare.vue'
import cpuData from '../../data/chips.min.json'

export default {
  data() {
    return {
      cpuData
    }
  }
}
</script>
