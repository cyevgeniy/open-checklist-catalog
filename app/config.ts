interface Config {
    githubUrl?: string
    title: string
}

function defineConfig(config: Config): Config {
    return config
}

export const config = defineConfig({
    githubUrl: 'https://github.com/cyevgeniy',
    title: 'Open Checklists'
})