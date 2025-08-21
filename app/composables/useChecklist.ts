import type { Checklist } from 'open-checklists'

export function useChecklist(list: Ref<Checklist | null | undefined>) {
    const state = ref<Map<string, boolean>>(new Map())

    const blockingIndexes = computed(() => {
        const res: number[] = []

        if (!list.value)
            return res

        for (let i=0; i < list.value.items.length; ++i) {
            if (list.value.items[i]?.blocking)
                res.push(i)
        }

        return res
    })

    const firstBlocking = computed(() => {
        if (!list.value)
            return -1

        for (const index of blockingIndexes.value) {
            
            const item = list.value.items[index]

            if (item?.blocking && !state.value.get(item.id))
                return index
        }

        return -1
    })

    function isBlocked(index: number) {
        return firstBlocking.value !== -1 && firstBlocking.value < index
    }

    const storage = createStorage()

    function setValue(id: string, value: boolean) {
        state.value.set(id, value)
        
        if (value)
            storage?.setItem(id, String(value))
        else
            storage?.removeItem(id)
    }

    function uncheckAll() {
        for (const key of state.value.keys()) {
            setValue(key, false)
        }
    }

    function loadState() {
        if (!list.value)
            return

        list.value.items.forEach(item => {
            const value = storage?.getItem(item.id)

            if (value === 'true')
                state.value.set(item.id, true)
        })
    }

    return {
        setValue,
        uncheckAll,
        loadState,
        isBlocked,
        state,
    }
}

