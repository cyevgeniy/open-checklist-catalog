<script setup lang="ts">
import { config } from '~/config'

</script>

<template>
    <footer>
        <div class="footer-content">
            <div class="link-list">
                <a :href="config.githubUrl" target="_blank" class="secondary">Github</a>
                <a href="https://github.com/cyevgeniy" target="_blank" class="secondary">What is it?</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    padding: 24px;
    border-top: 1px solid #99a3ae29;
    margin-top: auto;
}

.link-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.link-list > a {
    font-size: 14px;
    line-height: 24px;
}
</style>