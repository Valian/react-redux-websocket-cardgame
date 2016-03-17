import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

var todos = handleActions({
    ADD_TODO: (state, {payload}) => state.concat(payload),
    SET_TODOS: (state, {payload}) => payload
}, [])

var rootReducer = combineReducers({
    todos
})

export default rootReducer
