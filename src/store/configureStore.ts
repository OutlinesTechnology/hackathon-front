import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
