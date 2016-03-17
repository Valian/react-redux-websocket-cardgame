import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index'
import remoteActionMiddleware from '../middleware/api'

export default function configureStore(socket, initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(remoteActionMiddleware(socket), thunk)
    )
}