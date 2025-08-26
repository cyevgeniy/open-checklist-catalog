<script setup lang="ts">
import { config } from '~/config'

const { data } = await useAsyncData('all', () => {
  return queryCollection('lists').order('created_at', 'DESC').all()
})

const query = ref('')

const result = computed(() => {
  return query.value
    ? data.value?.filter(item => {
      const field = item.title || item.stem
      if (!field)
        return false

      return field.toLowerCase().indexOf(query.value.toLowerCase()) !== -1
    })
    : data.value
})

const isEmpty = computed(() => (result.value?.length ?? 0) === 0)

function onSearch(e: Event) {
  const text = (e.target as HTMLInputElement).value
  
  query.value = text
}

useHead({
  title: config.title
})
</script>

<template>
  <div class="block search-container">
    <input type="search" name="search" @change="onSearch" placeholder="Press &quot;/&quot; for search" aria-keyshortcuts="/" />
  </div>
  <CNoChecklists v-if="isEmpty" class="block" />
  <CGrid v-else class="block">
    <CChecklistCard v-for="item in result" :key="item.id" :stem="item.stem" :title="item.title || item.stem"
      :description="item.description" :icon="item._icon" />
  </CGrid>
</template>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
}
</style>