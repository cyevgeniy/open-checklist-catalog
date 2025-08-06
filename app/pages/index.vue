<script setup lang="ts">
const { data } = await useAsyncData('all', () => {
  return queryCollection('lists').all()
})
</script>

<template>
<h2> The list:  </h2> 
<div class="grid">
<CChecklistCard v-for="item in data" :key="item.id" :stem="item.stem" :title="item.title" :description="item.description"/>
</div>
</template>

<style scoped>
.grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
;
}
</style>