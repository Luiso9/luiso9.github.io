import {ref, onMounted} from 'vue'

const theme = ref('blueish')

export function useTheme() {
    const setTheme = (newTheme) => {
        theme.value = newTheme
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    const toggleTheme = () => {
        const newTheme = theme.value === 'blueish' ? 'darkDef' : 'blueish'
        setTheme(newTheme)
    }

    onMounted(() => {
        const current = document.documentElement.getAttribute('data-theme') || 'blueish'
        theme.value = current
    })

    return {
        theme,
        toggleTheme,
        setTheme
    }
}
