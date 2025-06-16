export function useImagePreload() {
    const preloadImages = (srcs) => {
        srcs.forEach((src) => {
            const img = new Image()
            img.src = src
        })
    }

    return {preloadImages}
}
