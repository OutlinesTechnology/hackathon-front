import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { SignIn, SignUp, Main, CreateProject, StartProfile, Selections, Post } from 'pages'
import { getCookie } from '../../../utils/cookies'
import { shallowEqual, useSelector } from 'react-redux'
import { getUser } from '../../User/selectors'

export const Routers: React.FC = (): JSX.Element => {
  const user = useSelector(getUser, shallowEqual)
  const [access, setAccess] = useState<boolean>(false)
  useEffect(() => {
    if (getCookie('token') !== undefined && user.email !== '') {
      setAccess(true)
    }
  }, [user])

  if (!access) {
    return <SignIn />
  }

  return (
    <Switch>
      <Route exact path="/" render={() => <Main />} />
      <Route path="/post/:id" component={Post} />
      <Route path="/selections" render={() => <Selections />} />
      <Route path="/start" render={() => <StartProfile />} />
      <Route path="/next" render={() => <SignUp />} />
      <Route path="/create_project" render={() => <CreateProject />} />
      <Route path="*" render={() => <Main />} />
    </Switch>
  )
}
