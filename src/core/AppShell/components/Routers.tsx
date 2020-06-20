import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { SignIn, SignUp, Main, CreateProject } from 'pages'
// import { getUser } from '../../User/selectors'

export const Routers: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Main />} />
      <Route path="/signin" render={() => <SignIn />} />
      <Route path="/signup" render={() => <SignUp />} />
      <Route path="/create_project" render={() => <CreateProject />} />
    </Switch>
  )
}
