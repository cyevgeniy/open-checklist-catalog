<script setup lang="ts">
import { config } from '~/config'

const { data } = await useAsyncData('all', () => {
  return queryCollection('lists').order('created_at', 'DESC').all()
})

const query = ref('')

const result = computed(() => query.value ? data.value?.filter(item => item.title.toLowerCase().indexOf(query.value.toLowerCase())!== -1) : data.value)
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
    <input type="search"  name="search" @change="onSearch" placeholder="Search for checklists" />
  </div>
  <CNoChecklists v-if="isEmpty" class="block" />
  <div v-else class="grid block">
    <CChecklistCard v-for="item in result" :key="item.id" :stem="item.stem" :title="item.title"
      :description="item.description" :icon="item._icon" />
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
}

.grid {
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-template-rows: auto auto;
  grid-auto-columns: 1fr;
  display: grid;
}

@media screen and (min-width: 640px) {
  .grid {
    grid-template-columns: 1fr 1fr;

  }
}

@media screen and (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);

  }
}
</style>