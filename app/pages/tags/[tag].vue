<script setup lang="ts">
const route = useRoute()
const tag = route.params.tag as string

const { data } = await useAsyncData(`tag-${tag}`, () => {
  return queryCollection('lists')
    .where('_tags', 'LIKE', `%"${tag}"%`)
    .order('created_at', 'DESC').all()
})
</script>

<template>
  <div>
    <h2 class="block"> #{{ tag }}</h2>
    <CNoChecklists v-if="!data?.length" class="block" />
    <CGrid class="block">
      <CChecklistCard v-for="item in data" :key="item.id" :stem="item.stem" :title="item.title || item.stem"
        :description="item.description" :icon="item._icon" />
    </CGrid>
  </div>
</template>