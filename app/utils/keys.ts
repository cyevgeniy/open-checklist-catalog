import type { Checklist } from '~/types/checklists'

interface ChecklistApi {
    state: Ref<Map<string, boolean>>
    isBlocked: (index: number) => boolean
    onUpdate: (id: string, e: Event) => void
    list: Ref<Checklist | null | undefined>
}

export const listApiKey = Symbol() as InjectionKey<ChecklistApi>