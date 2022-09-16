export default {
    state: {
        theme: 'light',
    },
    getters: {
        changeTheme(state) { 
            return state.theme
        }
    },
    mutations: { 
        updateTheme(state, theme) {
            let newTheme
            if(theme == 'light') {
                newTheme = 'dark'
            } 
            else if (theme == 'dark') {
                newTheme = 'light'
            }
            state.theme = newTheme
        }
    }
}
