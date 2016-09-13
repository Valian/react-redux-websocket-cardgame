import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { handleActions } from 'redux-actions'

const reducers = combineReducers({
    routing
})

export default (state={}, action) => {
    switch(action.type) {
        case 'SET_STATE':
            return {...state, ...action.payload};
        default:
            return reducers(state, action)
    }
}