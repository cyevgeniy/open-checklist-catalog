<script setup lang="ts">
import { onMounted } from 'vue';
import type { Checklist } from '~/types/checklists';

const props = defineProps<{
    checklist: Checklist
}>()

const {
    state,
    setValue,
    loadState,
} = useChecklist(toRef(props.checklist))

onMounted(() => {
    loadState()
})

function onUpdate(id: string, e: Event) {
    const checked = (e.target as HTMLInputElement).checked

    setValue(id, checked)
}

function uncheckAll() {
    props.checklist.items.forEach(item => {
        setValue(item.id, false)
    })
}

</script>
<template>
    <div class="checklist">
        <h2 class="title"> {{ checklist.title }} </h2>
        <p> {{ checklist.description }} </p>
        <button @click="uncheckAll">Uncheck all</button>
        <div class="checkbox-list">
            <div v-for="item in checklist.items" :key="item.id" class="check-item">
                <div class="checkbox">
                    <input :id="item.id" type="checkbox" :checked="state.get(item.id)"
                        @change="(e: Event) => onUpdate(item.id, e)" class="checkbox-input" />
                    <label :for="item.id">{{ item.title }}</label>
                </div>
                <pre v-if="item.content_text" class="item-content">{{ item.content_text }}</pre>
            </div>
        </div>
    </div>
</template>

<style scoped>
.checklist {
    color: black;
    padding: 16px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 1px 1px 1px 1px #0d164c;
    font-family: sans-serif;
}

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
}

.item-content {
    font-size: 14px;
    margin: 8px 0px 0px 28px;
    color: gray;
    max-width: 100%;
    white-space: pre-wrap;
}

.checkbox-list {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}
</style>