<template>
    <nav>
        <NuxtLink to="/" class="logo-link icon-link">
            <Icon name="icon-park-twotone:check-one" :size="24" />
            Open Checklists
        </NuxtLink>
        <div class="end">
            <NuxtLink to="/" class="text onlyicon-link  ">
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

.onlyicon-link, .logo-link {
    padding: 16px 0;
}

.end {
    margin-left: auto;
    display: flex;
    align-items:center;
}

.logo-link {
    opacity: 0.6;
}

.logo-link:hover{
    opacity: 0.8
}

.icon-link {
    display: flex;
    gap:4px;
    align-items: center;
    text-decoration: none;
    line-height: 1;
}

.onlyicon-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>