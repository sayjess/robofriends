import { CHANGE_SEARCH_FIELD } from './constants'

//initial state
const initialState = {
    searchField: ''
}

//reducer
export const searchRobots = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
        return {...state, searchField: action.payload}
        default:
            return state;
    }
}