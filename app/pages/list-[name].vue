<script setup lang="ts">
import CChecklist from '~/components/CChecklist.vue'


const route = useRoute()
const name: string = route.params.name as string

const { data: list } = await useAsyncData(name, () => {
  return queryCollection('lists')
    .where('stem', '=', name).first()
})
</script>

<template>
  <CChecklist :checklist="list" />
</template>