<script setup lang="ts">
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

useHead({
  title: list.value?.title
})

function onUpdate(id: string, e: Event) {
    const checked = (e.target as HTMLInputElement).checked

    setValue(id, checked)
}

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
      <div class="checklist" v-if="list">
        <div class="checkbox-list">
            <div v-for="(item, index) in list.items" :key="item.id" class="check-item">
                <div class="checkbox">
                    <input :id="item.id" type="checkbox" :checked="state.get(item.id)" :disabled="isBlocked(index)"
                        @change="(e: Event) => onUpdate(item.id, e)" class="checkbox-input" />
                    <label :for="item.id">{{ item.title }}</label>
                </div>
                <pre v-if="item.content_text" class="secondary item-content">{{ item.content_text }}</pre>
            </div>
        </div>
    </div>
    </template>
  </div>
</template>

<style scoped>
.title {
    margin: 0px 0px 16px;
    font-size: 18px;
}

.checkbox {
    display: flex;
    gap: 12px;
    align-items: center;
}

.checkbox-input {
    width: 16px;
    height: 16px;
    margin: 0px;
    flex-shrink: 0;
}

.item-content {
    font-size: 14px;
    font-family: sans-serif;
    line-height: 18px;
    margin: 8px 0px 0px 28px;
    max-width: 100%;
    white-space: pre-wrap;
}

.checkbox-list {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}


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