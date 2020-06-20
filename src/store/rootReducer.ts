import { combineReducers } from 'redux'
import { user, posts } from 'core'
import { post } from 'pages/Post/duck'

export const rootReducer = combineReducers({
  user: user,
  posts: posts,
  post: post,
})
