import { combineReducers } from 'redux'
import { user } from 'core'

export const rootReducer = combineReducers({
  user: user,
})
