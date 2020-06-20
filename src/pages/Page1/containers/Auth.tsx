import React from 'react'
import { Input, Button, H3 } from '@holism/core'
import styled from 'styled-components'
import { useAuthFacade } from '../hooks'
// import { getUserFromLogin } from 'core/User/selectors'

export const Auth: React.FC = (): JSX.Element => {
  const {
    username,
    password,
    changePassword,
    changeUsername,
    onClickAuthorization,
    disabled,
  } = useAuthFacade()

  // const formLoginError = useSelector(getUserFromLogin, shallowEqual)
  return (
    <Container>
      <div>
        <Row>
          <H3>Авторизация</H3>
        </Row>
        <Row>
          <Input
            placeholder="Логин"
            value={username}
            type="text"
            onChange={(e: React.ChangeEvent<any>, val: string) => changeUsername(val)}
          />
        </Row>
        <Row>
          <Input
            placeholder="Пароль"
            value={password}
            type="password"
            onChange={(e: React.ChangeEvent<any>, val: string) => changePassword(val)}
            // error={formLoginError}
          />
        </Row>
        <Row>
          <Button
            dimension="medium"
            color="secondary"
            onClick={onClickAuthorization}
            disabled={disabled}
          >
            Вход
          </Button>
        </Row>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Row = styled.div`
  margin: 10px;
  text-align: center;
  width: 250px;
`
