<script setup lang="ts">
import type { Item } from 'open-checklists'

interface Props {
  item: Item
  checked?: boolean
  disabled?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (evt: 'change', id: Item['id'], checked: boolean): void
}>()

const classes = useCssModule()

const hostClasses = computed(() => [
  classes.host,
  props.disabled ? classes.hostDisabled : classes.hostActive,
])

const titleClasses = computed(() => [
  classes.title,
  props.checked ? classes.titleChecked : props.disabled ? classes.titleDisabled : classes.titleUnchecked,
])

const checkboxClasses = computed(() => [
  classes.checkbox,
  props.disabled ? classes.checkboxDisabled : classes.checkboxActive,
])

const boxClasses = computed(() => [
  classes.box,
  props.checked ? classes.boxChecked : props.disabled ? classes.boxDisabled : classes.boxUnchecked,
])

function toggle() {
  emit('change', props.item.id, !props.checked)
}

function onClick() {
  if (!props.disabled)
    toggle()
}

function onKeydown(e: KeyboardEvent) {
  if (props.disabled)
    return

  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault()
    toggle()
  }
}
</script>

<template>
  <div :class="hostClasses">
    <div
      :class="checkboxClasses"
      :tabindex="disabled ? '-1' : 0"
      role="checkbox"
      :aria-checked="checked"
      :aria-disabled="disabled"
      @click="onClick"
      @keydown="onKeydown"
    >
      <div :class="boxClasses">
        <svg
          v-if="checked"
          :class="classes.checkIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M20 6L9 17l-5-5"
          />
        </svg>
      </div>
      <span :class="titleClasses">
        {{ item.title }}
      </span>
    </div>

    <div
      v-if="item.content_text"
      :class="$style.contentText"
    >
      {{ item.content_text }}
    </div>
  </div>
</template>

<style module>
.host {
    padding: 16px;
    border-radius: 16px;
}

.hostDisabled {
    opacity: 50%;
}

.hostActive:hover {
    background-color: oklch(98.4% 0.003 247.858);
}

.checkbox {
    display: flex;
    gap: 16px;
    align-items: center;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
}

.checkboxActive {
    cursor: pointer;
}

.checkboxActive:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 0px #fff,  0 0 0 calc(2px + 0px) oklch(70.7% 0.165 254.624), 0 0 #0000;
}

.checkboxDisabled {
    cursor: not-allowed;
}

.box {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
}

.boxDisabled {
    background-color: oklch(96.8% 0.007 247.896);
    border-color: oklch(92.9% 0.013 255.508);
}

.boxChecked {
    border-color: oklch(62.3% 0.214 259.815);
    background-color: oklch(62.3% 0.214 259.815);
}

.boxUnchecked {
    border-color: oklch(55.4% 0.046 257.417);
}

.boxUnchecked:hover {
    border-color: oklch(80.9% 0.105 251.813);
}

.checkIcon {
    color: white;
}

.titleDisabled {
    color: oklch(86.9% 0.022 252.894);
}

.titleUnchecked {
    color: oklch(37.2% 0.044 257.287);

}

.titleChecked {
    color: oklch(70.4% 0.04 256.788);
}

.contentText {
    margin-left: 48px;
    margin-top: 8px;
    font-size: 14px;
    white-space: pre-line;
    color: oklch(44.6% 0.043 257.281);
}
</style>
