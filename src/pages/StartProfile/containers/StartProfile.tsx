import React from 'react'
import { Button, H1, Input } from '@holism/core'
import styled from 'styled-components'
import { useStartProfileFacade } from '../hooks'
import { useHistory } from 'react-router-dom'

export const StartProfile: React.FC = (): JSX.Element => {
  const { stateProfile } = useStartProfileFacade()
  const history = useHistory()

  return (
    <Container>
      <Form>
        <Title>
          <H1>Добро пожаловать!</H1>
        </Title>

        <Row>
          <Input
            placeholder="Имя"
            value={stateProfile['username'].value}
            type="text"
            onChange={(e: React.ChangeEvent<any>, val: string) => stateProfile['username'].set(val)}
          />
        </Row>
        <Row>
          <Input
            placeholder="Фамилия"
            value={stateProfile['surname'].value}
            type="text"
            onChange={(e: React.ChangeEvent<any>, val: string) => stateProfile['surname'].set(val)}
          />
        </Row>

        <Row>
          <Button dimension="medium" color="secondary" onClick={() => history.push('/selections')}>
            Продолжить
          </Button>
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
  max-width: 300px;
`

const Title = styled.div`
  margin: 10px 0 20px 0;
  max-width: 380px;
`
