import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Auth } from 'pages'
// import { getUser } from '../../User/selectors'
// import { Modal, Preloader } from 'common'

export const Routers: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Auth />} />
    </Switch>
  )
}
