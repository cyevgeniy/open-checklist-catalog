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
        <div class="card-content">
            <h2> {{ title }}</h2>
            <p v-if="description" class="secondary">{{ description}}</p>
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
}

.card h2 {
    margin: 0px;
    font-size: 18px;
}

.card:visited {
    color: unset;
}
</style>