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
    <CChecklist :checklist="list as Checklist" />
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 24px 0px;
}
</style>