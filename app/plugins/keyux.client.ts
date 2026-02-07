import {
  hotkeyKeyUX,
  hotkeyOverrides,
  startKeyUX,
} from 'keyux'

export default defineNuxtPlugin((_) => {
  const overrides = hotkeyOverrides({})

  startKeyUX(window, [
    hotkeyKeyUX([overrides]),
  ])
})
