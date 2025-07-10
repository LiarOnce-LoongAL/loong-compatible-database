<template>
  <Layout>
    <template #doc-before>
      <div class="doc-banner" v-if="!frontmatter.banner === false || frontmatter.author">
        作者：{{ frontmatter.author }} &nbsp; 发布时间：{{ frontmatter.date }}
      </div>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<style scoped>
.doc-banner {
  background: var(--vp-c-brand);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}
</style>