import { combineReducers } from 'redux'
import { user, posts } from 'core'

export const rootReducer = combineReducers({
  user: user,
  posts: posts,
})
