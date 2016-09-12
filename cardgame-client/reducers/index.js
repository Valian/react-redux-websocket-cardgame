import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { handleActions } from 'redux-actions'
import todos from './todos'

const reducers = combineReducers({
    todos,
    routing
})

const rootReducer = (state, action) => {
    switch(action.type) {
        case 'SET_STATE':
            return {...state, ...action.payload};
        default:
            return reducers(state, action)
    }
}

export default rootReducer