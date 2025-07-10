---
aside: false
outline: false
banner: false
---
# LibLoL 兼容性

libLoL (LoongArch on LoongArch) 是一款用于提供旧世界 ABI 兼容性的运行时。

如果你不知道为什么需要 libLoL，或者需要了解有关新旧世界应用不兼容来由的相关信息，请见龙芯开源社区《咱龙了吗？》站点的[《旧世界与新世界》](https://areweloongyet.com/docs/old-and-new-worlds)和[《旧世界与新世界（底层细节》](https://areweloongyet.com/docs/world-compat-details/)。

<liblolTagsInfo />

::: raw
<ClientOnly>
    <liblolList />
</ClientOnly>
:::

<script setup>
    import liblolTagsInfo from "./.vitepress/theme/components/tags/liblol_tagsinfo.vue"
    import liblolList from "./.vitepress/theme/components/liblol.vue"
</script>