import {onMounted, ref} from 'vue'

const theme = ref('darkDef')

export function useTheme() {
    const setTheme = (newTheme) => {
        theme.value = newTheme
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    const toggleTheme = () => {
        setTheme(theme.value === 'darkDef' ? 'blueish' : 'darkDef')
    }

    onMounted(() => {
        theme.value = document.documentElement.getAttribute('data-theme') || 'darkDef'
    })

    return {
        theme,
        toggleTheme,
        setTheme
    }
}
