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

export function createStorage() {
    const ok = isHasLocalStorage()


    return ok ? {
        setItem,
        removeItem,
        getItem,
    }
        :
        undefined
}