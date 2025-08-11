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
  <div class="list block">
    <template v-if="list">
      <h1 class="title no-top-margin"> {{ list.title }}</h1>
      <p v-if="list.description" class="no-top-margin">{{ list.description }}</p>
      <CChecklist :checklist="list as Checklist" class="block"/>
    </template>
  </div>
</template>

<style scoped>
.list {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 24px;
}
</style>