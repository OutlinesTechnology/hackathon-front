import React from 'react'
import { Input, Button, H1, Paragraph } from '@holism/core'
import styled from 'styled-components'
import { useSignInFacade } from '../hooks'

export const SignIn: React.FC = (): JSX.Element => {
  const {
    username,
    password,
    changePassword,
    changeUsername,
    onClickAuthorization,
    disabled,
  } = useSignInFacade()

  return (
    <Container>
      <Form>
        <Title>
          <H1>Добро пожаловать</H1>
        </Title>
        <Paragraph size={16} lineHeight={24}>
          Введите вашу корпоративную почту и пароль
        </Paragraph>

        <Row>
          <Input
            placeholder="Почта"
            value={username}
            type="email"
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
          {/*<LinkReg>*/}
          {/*  <Link to={'/signup'}>Регистрация</Link>*/}
          {/*</LinkReg>*/}
        </Row>
      </Form>
    </Container>
  )
}

const Form = styled.div`
  margin: 10px;
  max-width: 600px;
`

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Row = styled.div`
  margin: 10px 0 10px 0;
  width: 250px;
`

const Title = styled.div`
  margin: 10px 0 10px 0;
  margin-bottom: 20px;
  width: 300px;
`
