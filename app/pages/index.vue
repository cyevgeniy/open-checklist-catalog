<script setup lang="ts">
const { data } = await useAsyncData('all', () => {
  return queryCollection('lists').all()
})

const query = ref('')

const result = computed(() => query.value ? data.value?.filter(item => item.title.toLowerCase().indexOf(query.value.toLowerCase())!== -1) : data.value)
const isEmpty = computed(() => (result.value?.length ?? 0) === 0)

function onSearch(e: Event) {
  const text = (e.target as HTMLInputElement).value
  query.value = text 
}
</script>

<template>
  <div class="block search-container">
    <h2 class="no-top-margin"> Checklists </h2>
    <input type="search"  name="search" @search="onSearch" placeholder="Search for checklists" />
  </div>
  <CNoChecklists v-if="isEmpty" class="block" />
  <div v-else class="grid block">
    <CChecklistCard v-for="item in result" :key="item.id" :stem="item.stem" :title="item.title"
      :description="item.description" />
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