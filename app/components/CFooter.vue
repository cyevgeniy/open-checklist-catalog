<script setup lang="ts">
import { config } from '~/config'

</script>

<template>
    <footer>
        <div class="footer-content">
                {{ config.footer?.text }}
        </div>
    </footer>
</template>

<style scoped>
footer {
    padding: 24px;
    border-top: 1px solid #99a3ae29;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>