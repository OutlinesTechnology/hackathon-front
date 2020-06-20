import React from 'react'
import { Button, H1, Paragraph } from '@holism/core'
import styled from 'styled-components'
import { useSignUpFacade } from '../hooks'
import { StepThree, StepTwo } from '../components'
import { textSteps } from '../utils'

export const SignUp: React.FC = (): JSX.Element => {
  const {
    stepsTotal,
    step,
    changeStep,
    stateTwoStep,
    stateThreeStep,
    disabledStep,
    registrationOnClick,
  } = useSignUpFacade()

  const getContent = () => {
    switch (step) {
      case 1:
        return <StepTwo eventsAndData={stateTwoStep} />
      case 2:
        return <StepThree eventsAndData={stateThreeStep} />
    }
  }

  const texts = textSteps[step]

  return (
    <Container>
      <Form>
        <Title>
          <H1>{texts.title}</H1>
        </Title>
        <Paragraph size={16} lineHeight={24}>
          {texts.description}
        </Paragraph>

        {getContent()}

        <Row>
          <Button
            dimension="medium"
            color="secondary"
            onClick={() => (step < stepsTotal ? changeStep(step + 1) : registrationOnClick())}
            disabled={disabledStep}
          >
            {step >= stepsTotal ? 'Начать' : 'Продолжить'}
          </Button>
          <Steps>
            {step} из {stepsTotal} шагов
          </Steps>
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

const Steps = styled.div`
  display: inline-block;
  margin-left: 1em;
  font-family: 'Proxima Nova', sans-serif;
  color: #0057b6;
`
