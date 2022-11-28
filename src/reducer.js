import { 
    CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCESS,
    REQUEST_ROBOTS_FAILED } from './constants'

//initial state
const initialStateSearch = {
    searchField: '',
}



//reducer
export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
        return {...state, searchField: action.payload}
        default:
            return state;
    }
}


const initialStateRequest = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRequest, action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
        return {...state, isPending: true};
        case REQUEST_ROBOTS_SUCESS:
        return {...state, robots: action.payload, isPending: false};
        case REQUEST_ROBOTS_FAILED:
        return {...state, error: action.payload, isPending: false};
        default:
            return state;
    }
}
