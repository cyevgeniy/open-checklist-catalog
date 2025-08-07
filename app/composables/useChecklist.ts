import type { Checklist } from '~/types/checklists'

function isHasLocalStorage() {
    try {
        window.localStorage.setItem('t', '1')
        window.localStorage.removeItem('t')
        return true
    }
    catch {
        return false
    }
}

function setItem(key: string, value: string) {
    window.localStorage.setItem(key, value)
}

function removeItem(key: string) {
    window.localStorage.removeItem(key)
}

function getItem(key: string) {
    return window.localStorage.getItem(key)
}

function createStorage() {
    const ok = isHasLocalStorage()


    return ok ? {
        setItem,
        removeItem,
        getItem,
    }
        :
        undefined
}

export function useChecklist(list: Ref<Checklist>) {
    const state = ref<Map<string, boolean>>(new Map())

    const storage = createStorage()

    function setValue(id: string, value: boolean) {
        state.value.set(id, value)
        
        if (value)
            storage?.setItem(id, String(value))
        else
            storage?.removeItem(id)
    }

    function loadState() {
        list.value.items.forEach(item => {
            const value = storage?.getItem(item.id)

            if (value === 'true')
                state.value.set(item.id, true)
        })
    }

    return {
        setValue,
        loadState,
        state,
    }
}

