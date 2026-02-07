<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style scoped>
.grid {
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-template-rows: auto auto;
  grid-auto-columns: 1fr;
  display: grid;
}

@media screen and (min-width: 640px) {
  .grid {
    grid-template-columns: 1fr 1fr;

  }
}

@media screen and (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);

  }
}
</style>
