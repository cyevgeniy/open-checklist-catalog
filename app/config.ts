import type { Config } from './types/config'

function defineConfig(config: Config): Config {
  return config
}

export const config = defineConfig({
  githubUrl: 'https://github.com/cyevgeniy/open-checklist-catalog',
  title: 'Open Checklists',
  nav: [
    { text: 'About format', link: 'https://github.com/cyevgeniy/chkl?tab=readme-ov-file#open-checklists', target: '_blank' },
    { text: 'Want my own!', link: '/list-own' },

  ],
  footer: {
    text: 'Open Checklists, 2025',
  },
})
