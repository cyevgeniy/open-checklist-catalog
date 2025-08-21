export interface NavLink {
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

export interface Footer {
    /**
     * Text to display in the footer
     * @example 'Made with Nuxt by John Doe'
     */
    text?: string
}

export interface Config {
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