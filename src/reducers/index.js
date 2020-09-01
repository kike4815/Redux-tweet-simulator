import { combineReducers } from 'redux'
import modalReducer from './modalReducer'
import validationReducer from './validationReducer'
import tweetsReducer from './tweetsReducer'

export default combineReducers({
    modals: modalReducer,
    validations: validationReducer,
    tweets: tweetsReducer
})
