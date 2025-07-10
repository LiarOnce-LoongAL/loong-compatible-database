<template>
    <div class="blog-list">
        <article v-for="post in paginatedPosts" :key="post.url" class="post">
            <p>
                <span class="date">{{ post.date }}</span>&nbsp;
                <a :href="post.url">{{ post.title }}</a>&nbsp;
                <span class="author">{{ post.author }}</span>
            </p>
        </article>

        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
            <span>第 {{ currentPage }} 页</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";
    import { data } from "../data/posts.data.js";

    const currentPage = ref(1);
    const postsPerPage = 10;

    const totalPages = computed(() => Math.ceil(data.posts.length / postsPerPage));

    const paginatedPosts = computed(() => {
        const start = (currentPage.value - 1) * postsPerPage;
        const end = start + postsPerPage;
        return data.posts.slice(start, end);
    });

    function prevPage() {
        if (currentPage.value > 1) currentPage.value--;
    }

    function nextPage() {
        if (currentPage.value < totalPages.value) currentPage.value++;
    }
</script>

<style scoped>
    .pagination {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        gap: 10px;
    }
</style>
