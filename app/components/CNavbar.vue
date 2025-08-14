<script setup lang="ts">
import { config } from '~/config'
</script>

<template>
    <nav>
        <NuxtLink to="/" class="logo-link icon-link">
            <Icon name="icon-park-twotone:check-one" :size="24" />
            {{ config.title }}
        </NuxtLink>
        <a
            v-for="(link, index) in config.nav ?? []"
            :key="index"
            :href="link.link"
            :target="link.target"
            class="nav-link"
        >
            {{ link.text }}
        </a>
        <div class="end">
            <NuxtLink v-if="config.githubUrl" :to="config.githubUrl" target="_blank" class="text onlyicon-link  ">
                <Icon name="uil:github" :size="20" />
            </NuxtLink>
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    gap: 24px;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid var(--color-lightest-gray);
}

.onlyicon-link, .logo-link, .nav-link {
    padding: 16px 0;
}

.end {
    margin-left: auto;
    display: flex;
    align-items:center;
}

.logo-link {
    opacity: 0.8;
    font-weight: 600;
}

.icon-link {
    display: flex;
    gap:4px;
    align-items: center;
    text-decoration: none;
    line-height: 1;
}

.nav-link {
    text-decoration: none;
}

.nav-link:hover {
    color: var(--color-primary);

}

.onlyicon-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>