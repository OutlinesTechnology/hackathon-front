import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { SignIn, SignUp } from 'pages'
// import { getUser } from '../../User/selectors'
// import { Modal, Preloader } from 'common'

export const Routers: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" render={() => <SignIn />} />
      <Route path="/signin" render={() => <SignIn />} />
      <Route path="/signup" render={() => <SignUp />} />
    </Switch>
  )
}
