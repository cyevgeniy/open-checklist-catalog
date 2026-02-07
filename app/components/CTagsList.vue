<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>

<template>
  <div class="tagslist">
    <RouterLink
      v-for="tag in tags"
      :key="tag"
      :to="`/tags/${tag}`"
    >#{{ tag }}</RouterLink>
  </div>
</template>

<style scoped>
.tagslist {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}
</style>
