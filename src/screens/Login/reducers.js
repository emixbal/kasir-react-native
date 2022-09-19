import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_LOADING:
            return {
                ...state,
                isLoading: action.value
            };
        case type.CHANGE_USERNAME:
            return {
                ...state,
                username: action.value
            };
        case type.CHANGE_PASSWORD:
            return {
                ...state,
                password: action.value
            };
        case type.RESET:
            return {
                ...defaultState(),
            };
        default:
            return state
    }
}

const defaultState = () => ({
    isLoading: false,
    username: '',
    password: '',
})

export default main
