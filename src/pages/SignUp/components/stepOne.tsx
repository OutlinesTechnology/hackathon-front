import React from 'react'
import { Input } from '@holism/core'
import styled from 'styled-components'

export const StepOne: React.FC = (): JSX.Element => {
  return (
    <>
      <Row>
        <Input
          placeholder="Имя"
          value={''}
          type="text"
          onChange={(e: React.ChangeEvent<any>, val: string) => val}
        />
      </Row>
      <Row>
        <Input
          placeholder="Фамилия"
          value={''}
          type="text"
          onChange={(e: React.ChangeEvent<any>, val: string) => val}
        />
      </Row>
      <Row>
        <Input
          placeholder="Департамент"
          value={''}
          type="text"
          onChange={(e: React.ChangeEvent<any>, val: string) => val}
        />
      </Row>
    </>
  )
}

const Row = styled.div`
  margin: 10px 0 10px 0;
  max-width: 300px;
`
