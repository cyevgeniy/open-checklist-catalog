<script setup lang="ts">
const props = defineProps<{
    title: string
    description?: string
    stem: string
}>()

const routeName = computed(() => `list-${props.stem}`)
</script>

<template>
    <RouterLink class="card" :to="routeName">
        <h2> {{ title }}</h2>
        <p v-if="description" class="description"> {{ description}}</p>
    </RouterLink>
</template>

<style scoped>
.card {
    border-radius: 8px;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px;
    font-family: sans-serif;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    overflow: hidden;
    min-height: 100px;
}

.card:hover {
    background-color: lightcyan;
}

.card h2 {
    margin: 0px;
    font-size: 18px;
}

.card p {
    margin: 12px 0px 0px;
}

.card:visited {
    color: black;
}

.description {
    color: gray;
}
</style>