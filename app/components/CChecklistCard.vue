<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
  icon?: string
  stem: string
}>()

const routeName = computed(() => `/list-${props.stem}`)
const _description = computed(() => props.description?.split('\n')[0])
</script>

<template>
  <RouterLink
    class="card"
    :to="routeName"
  >
    <div class="card-content">
      <div class="card-flex">
        <Icon
          v-if="icon"
          :name="icon"
          :size="24"
          class="card-icon"
        />
        <div class="card-info">
          <h2> {{ title }}</h2>
          <p
            v-if="_description"
            class="secondary"
          >{{ _description }}</p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
    border-radius: 8px;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 8px;
    font-family: sans-serif;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    overflow: hidden;
    min-height: 100px;
    max-height: 150px;
}

.card:hover {
    background: rgba(221, 219, 230, 0.3);
}

.card-content {
    overflow: hidden;
    height: 100%;
}

.card-icon {
    flex-shrink: 0;
}

.card-flex {
    display: flex;
    gap: 4px;
    align-items: start;
    height: 100%;
}

.card h2 {
    margin: 0px;
    font-size: 18px;
}

.card:visited {
    color: unset;
}
</style>
