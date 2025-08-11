<template>
    <div class="page-container">
        <div class="content">
            <slot />
        </div>
        <CFooter />
    </div>
</template>

<style scoped>
.page-container {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.content {
    padding-bottom: 24px;
}

@media screen and (max-width: 767px) {
    .page-container {
        max-width: none;
        padding: 0 16px;
    }
}
</style>