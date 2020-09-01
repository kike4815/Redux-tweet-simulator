import { createStore } from 'redux'
import reducer from './reducers'
import { getStateLocalStorage, setLocalStorage } from './utils/localStorage'

const localStorage = getStateLocalStorage()
const store = createStore(
    reducer,
    localStorage,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    setLocalStorage({
        tweets: store.getState().tweets
    })
})

export default store
