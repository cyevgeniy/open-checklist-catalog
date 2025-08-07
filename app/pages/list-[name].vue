<script setup lang="ts">
import CChecklist from '~/components/CChecklist.vue'
import type { Checklist } from '~/types/checklists'


const route = useRoute()
const name: string = route.params.name as string

const { data: list } = await useAsyncData(name, () => {
  return queryCollection('lists')
    .where('stem', '=', name).first()
})
</script>

<template>
  <div class="container">
    <template v-if="list">
      <h1 class="title"> {{ list.title }}</h1>
      <p v-if="list.description">{{ list.description }}</p>
      <CChecklist :checklist="list as Checklist" />
    </template>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 8px;
}

.title {
  font-size: 24px;
  margin: 0px;
}
</style>