import { createStore } from 'redux'
import { gameData } from './reducers'

const store = createStore(
    gameData, window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
