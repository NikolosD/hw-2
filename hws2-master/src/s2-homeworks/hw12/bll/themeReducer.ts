

type State = {
    themeId: number
}
const initState:State = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): State => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":{
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID' as const, id }) // fix any
export type changeThemeIdType = ReturnType<typeof changeThemeId>
