<script setup lang="ts">
import CChecklist from '~/components/CChecklist.vue'

const route = useRoute()
const name: string = route.params.name as string

const { data: list } = await useAsyncData(name, () => {
  return queryCollection('lists')
    .where('stem', '=', name).first()
})

const {
    state,
    setValue,
    loadState,
    uncheckAll,
    isBlocked,
} = useChecklist(list)

function onUpdate(id: string, e: Event) {
    const checked = (e.target as HTMLInputElement).checked

    setValue(id, checked)
}

provide(listApiKey, {
  onUpdate,
  isBlocked,
  state,
  list,
})

onMounted(() => {
  loadState()
})
</script>

<template>
  <div class="list block">
    <template v-if="list">
      <div class="list-header">
        <h1 class="title no-top-margin"> {{ list.title }}</h1>
        <button @click="uncheckAll">Uncheck all</button>
      </div>
      <p v-if="list.description" class="no-top-margin">{{ list.description }}</p>
      <CChecklist class="block"/>
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

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--step-vertical);
}

.list-header > * {
  margin: 0;
}
</style>