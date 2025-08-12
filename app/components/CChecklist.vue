<script setup lang="ts">

const api = inject(listApiKey)

</script>
<template>
    <div class="checklist" v-if="api">
        <!-- <button @click="uncheckAll">Uncheck all</button> -->
        <div class="checkbox-list">
            <div v-for="(item, index) in api.list.value?.items" :key="item.id" class="check-item">
                <div class="checkbox">
                    <input :id="item.id" type="checkbox" :checked="api?.state.value.get(item.id)" :disabled="api?.isBlocked(index)"
                        @change="(e: Event) => api?.onUpdate(item.id, e)" class="checkbox-input" />
                    <label :for="item.id">{{ item.title }}</label>
                </div>
                <pre v-if="item.content_text" class="secondary item-content">{{ item.content_text }}</pre>
            </div>
        </div>
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
    overflow-x: scroll;
}

.checkbox-list {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>