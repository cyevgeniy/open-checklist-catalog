interface NavLink {
    /**
     * Link text
     * @example 'My projects'
     */
    text: string

    /**
     * URL of the link
     * @example 'https://example.com'
     * @example '/list-own'
     */
    link: string

    /**
     * target attribute
     * @example '_blank'
     */
    target?: string
}

interface Footer {
    /**
     * Text to display in the footer
     * @example 'Made with Nuxt by John Doe'
     */
    text?: string
}

interface Config {
    /**
     * Link to a github repo
     */
    githubUrl?: string

    /**
     * The title of the site.
     * Will be shown in the header
     */
    title: string

    nav?: NavLink[]

    footer?: Footer
}

function defineConfig(config: Config): Config {
    return config
}

export const config = defineConfig({
    githubUrl: 'https://github.com/cyevgeniy',
    title: 'Open Checklists',
    nav: [
        {text: 'What is it?', link: 'https://github.com', target: "_blank"},
        {text: 'Want my own!', link: '/list-own'}
    ],
    footer: {
        text: 'Open Checklists, 2025'
    }
})