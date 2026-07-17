const images = import.meta.glob<{ default: string }>('../assets/images/*', {
    eager: true
})

export function resolveImage(path?: string): string {
    if (!path) return ''

    const fileName = path.split('/').pop() ?? ''
    const match = Object.entries(images).find(([key]) => key.endsWith('/' + fileName))

    if (!match) {
        console.warn(`[resolveImage] "${fileName}" was not found under src/assets/images. Check the exact file name (including uppercase/lowercase letters and spaces).`)
        return ''
    }

    return match[1].default
}
