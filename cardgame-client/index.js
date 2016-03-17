import 'babel-polyfill'
import React from 'react'
import io from 'socket.io-client';
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Root from './containers/Root'
import configureStore from './store/configureStore'
import initSocketHandlers from './socket'

const socket = io(`${location.protocol}//${location.hostname}:8090`)
const store = configureStore(socket)
const history = syncHistoryWithStore(browserHistory, store)

initSocketHandlers(socket, store)

render(
<Root store={store} history={history} />,
    document.getElementById('root')
)