import React from 'react'
import { Input } from '@holism/core'
import styled from 'styled-components'

import { IStateSteps } from '../hooks/useSignUpFacade'

interface Props {
  eventsAndData: IStateSteps
}

export const StepOne: React.FC<Props> = ({ eventsAndData }): JSX.Element => {
  return (
    <>
      <Row>
        <Input
          placeholder="Имя"
          value={eventsAndData['username'].value}
          type="text"
          onChange={(e: React.ChangeEvent<any>, val: string) => eventsAndData['username'].set(val)}
        />
      </Row>
      <Row>
        <Input
          placeholder="Фамилия"
          value={eventsAndData['surname'].value}
          type="text"
          onChange={(e: React.ChangeEvent<any>, val: string) => eventsAndData['surname'].set(val)}
        />
      </Row>
      <Row>
        <Input
          placeholder="Департамент"
          value={eventsAndData['department'].value}
          type="text"
          onChange={(e: React.ChangeEvent<any>, val: string) =>
            eventsAndData['department'].set(val)
          }
        />
      </Row>
    </>
  )
}

const Row = styled.div`
  margin: 10px 0 10px 0;
  max-width: 300px;
`
