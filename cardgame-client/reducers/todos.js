import { handleActions } from 'redux-actions'

export default handleActions({
    ADD_TODO: (todos, {payload}) => todos.concat(payload)
}, [])