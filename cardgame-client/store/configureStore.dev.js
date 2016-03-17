import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index'
import remoteActionMiddleware from '../middleware/api'
import DevTools from '../containers/DevTools'

export default function configureStore(socket, initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(remoteActionMiddleware(socket), thunk, createLogger()),
            DevTools.instrument()
        )
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}