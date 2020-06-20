import React from 'react'
import { Button, H1 } from '@holism/core'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

export const Selections: React.FC = (): JSX.Element => {
  const history = useHistory()

  return (
    <Container>
      <Form>
        <Title>
          <H1>Давайте начнем</H1>
        </Title>

        <Row>
          <Button
            width="200px"
            dimension="medium"
            color="primary"
            onClick={() => history.push('/create_project')}
          >
            Создать проект
          </Button>
          <Button
            width="200px"
            dimension="medium"
            color="secondary"
            onClick={() => history.push('/')}
          >
            Лента проектов
          </Button>
        </Row>
      </Form>
    </Container>
  )
}

const Form = styled.div`
  margin-top: 15%;
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
`

const Title = styled.div`
  margin: 10px 0 20px 0;
  max-width: 380px;
  text-align: center;
`
