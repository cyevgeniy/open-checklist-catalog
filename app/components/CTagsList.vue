<script setup lang="ts">
defineProps<{
    tags: string[]
}>()
</script>

<template>
    <div class="tagslist">
        <RouterLink v-for="tag in tags" :to="`/tags/${tag}`">#{{ tag }}</RouterLink>
    </div>
</template>

<style scoped>
.tagslist {
    display: flex;
    gap: 8px;
    overflow-x: scroll;
    flex-wrap: wrap;
}
</style>