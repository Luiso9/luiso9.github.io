import {nextTick, onMounted, onUnmounted, ref, shallowRef} from 'vue'
import {throttle} from 'lodash-es'

export interface IntersectionObserverOptions {
    threshold?: number | number[]
    rootMargin?: string
    throttleMs?: number
}

export function useIntersectionObserver(
    callback: (entries: IntersectionObserverEntry[]) => void,
    options: IntersectionObserverOptions = {}
) {
    const {
        threshold = 0.1,
        rootMargin = '0px',
        throttleMs = 16
    } = options

    const targetRef = shallowRef<HTMLElement | null>(null)
    const isIntersecting = ref(false)

    let observer: IntersectionObserver | null = null


    const throttledCallback = throttle((entries: IntersectionObserverEntry[]) => {

        isIntersecting.value = entries.some(entry => entry.isIntersecting)


        callback(entries)
    }, throttleMs)


    const observe = async (target?: HTMLElement) => {
        await nextTick()
        const element = target || targetRef.value
        if (!element) return

        observer = new IntersectionObserver(throttledCallback, {
            threshold,
            rootMargin
        })

        observer.observe(element)
    }


    const disconnect = () => {
        observer?.disconnect()
        observer = null
        throttledCallback.cancel?.()
    }


    onMounted(() => {
        if (targetRef.value) {
            observe()
        }
    })


    onUnmounted(disconnect)

    return {
        targetRef,
        isIntersecting,
        observe,
        disconnect
    }
}