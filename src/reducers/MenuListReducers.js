import { RECEIVE_DATA_STORAGE, ADD_LIST_LINK } from '../actions/types'

const INITIAL_STATE = {
    dataSites: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RECEIVE_DATA_STORAGE:
            return { ...state, dataSites: action.payload }
        case ADD_LIST_LINK:
            return {...state}
        default:
            return state
    }

}