import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from 'store'
import { Root } from 'core'

export const App: React.FC = (): JSX.Element => (
  <Provider store={store}>
    <Root />
  </Provider>
)
