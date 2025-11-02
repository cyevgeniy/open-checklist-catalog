<script setup lang="ts">
import type { Author } from 'open-checklists'

const props = defineProps<{
    author: Author
}>()

const component = computed(() => props.author.url ? 'a' : 'div')
</script>

<template>
    <component :is="component" :href="author.url" target="_blank" class="author">
        <img v-if="author.avatar" :src="author.avatar" decoding="async" /> 
        <p>{{  author.name }}</p>
    </component>
</template>

<style scoped>
.author {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    border-radius: 8px;
    text-decoration: none;
    gap: 4px;
}

a.author:hover {
    text-decoration: underline;
}

.author > p {
    font-weight: 500;
    font-size: 16px;
}

.author > img {
    border-radius: 9999px;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
}
</style>