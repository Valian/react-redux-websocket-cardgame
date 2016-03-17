import { Server } from 'http'
import configureStore from './store/configureStore'
import { setTodos } from './actions/index'
import startServer from './socket'


const store = configureStore()
const app = Server()
startServer(app, store)