import {onUnmounted, ref, shallowRef, watch} from 'vue'
import {debounce} from 'lodash-es'
import {animate} from 'animejs'

export interface NavbarAnimationOptions {
    duration?: number
    easing?: string
    offset?: number
}

export function useNavbarAnimation(options: NavbarAnimationOptions = {}) {
    const {
        duration = 300,
        easing = 'easeInOutQuad',
        offset = 40
    } = options

    const navBarRef = shallowRef<HTMLElement | null>(null)
    const isNavHidden = ref(false)
    const isAnimating = ref(false)

    let currentAnimation: any = null

    const debouncedAnimate = debounce(async (hidden: boolean) => {
        if (!navBarRef.value || isAnimating.value) return

        isAnimating.value = true

        if (currentAnimation) {
            currentAnimation.pause()
            currentAnimation = null
        }

        try {
            if (hidden) {
                currentAnimation = animate(navBarRef.value, {
                    opacity: 0,
                    translateY: -offset,
                    duration,
                    easing,
                    complete: () => {
                        if (navBarRef.value) {
                            navBarRef.value.style.pointerEvents = 'none'
                        }
                        isAnimating.value = false
                    }
                })
            } else {
                navBarRef.value.style.pointerEvents = ''
                currentAnimation = animate(navBarRef.value, {
                    opacity: 1,
                    translateY: 0,
                    duration,
                    easing,
                    complete: () => {
                        isAnimating.value = false
                    }
                })
            }
        } catch (error) {
            console.warn('Animation failed:', error)
            isAnimating.value = false
        }
    }, 50)

    watch(isNavHidden, debouncedAnimate, {immediate: false})

    const cleanup = () => {
        if (currentAnimation) {
            currentAnimation.pause()
            currentAnimation = null
        }

        if (navBarRef.value) {
            navBarRef.value.style.transition = 'none'
            navBarRef.value.style.pointerEvents = ''
            navBarRef.value.style.opacity = '1'
            navBarRef.value.style.transform = 'translateY(0)'
        }

        debouncedAnimate.cancel?.()
        isAnimating.value = false
    }

    onUnmounted(cleanup)

    return {
        navBarRef,
        isNavHidden,
        isAnimating,
        cleanup
    }
}