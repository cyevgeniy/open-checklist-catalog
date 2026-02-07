<script setup lang="ts">
import CCheckItem from '~/components/CCheckItem.vue'

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
  title: list.value?.title,
})

onMounted(() => {
  loadState()
})
</script>

<template>
  <div class="list">
    <template v-if="list">
      <CTagsList
        v-if="list._tags"
        :tags="list._tags"
        class="block"
      />
      <h1 class="title block">
        {{ list.title }}
      </h1>

      <p
        v-if="list.description"
        class="description no-top-margin"
      >
        {{ list.description }}
      </p>
      <div
        v-if="list.authors?.length"
        class="authors"
      >
        <span>by</span>
        <template
          v-for="(author, index) in list.authors"
          :key="index"
        >
          <CAuthor
            :author="author"
          />
          <span v-if="index < list.authors.length - 1">,</span>
        </template>
      </div>
      <button
        class="block"
        @click="uncheckAll"
      >
        Uncheck all
      </button>
      <div
        v-if="list"
        class="checklist"
      >
        <div class="checkbox-list">
          <div
            v-for="(item, index) in list.items"
            :key="item.id"
            class="check-item"
          >
            <CCheckItem
              :item="item"
              :checked="state.get(item.id)"
              :disabled="isBlocked(index)"
              @change="setValue"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.title {
    margin-bottom: 8px;
    font-size: 18px;
}

.description {
  margin-bottom: 16px;
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
  font-size: 30px;
  line-height: calc(2.25 / 1.875);
  margin-bottom: 4px;
}

.authors {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
