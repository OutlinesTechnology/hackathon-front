import React from 'react'
import { InputSuggest, Chips } from '@holism/core'
import styled from 'styled-components'
import { getSuggestions, optionsData } from '../utils'

export const StepThree: React.FC<any> = ({ eventsAndData }): JSX.Element => {
  return (
    <Container>
      <Row>
        <InputSuggest
          onChange={val => {
            const isFoundSuggestions = optionsData.some((el: any) =>
              el.label.includes(val.toLocaleLowerCase())
            )

            isFoundSuggestions
              ? eventsAndData['options'].set(getSuggestions(val, optionsData))
              : eventsAndData['options'].set([])
          }}
          getSuggestionsProp={getSuggestions}
          onSelect={(item: any) => {
            eventsAndData['userList'].set([
              ...eventsAndData['userList'].value,
              { id: item.value, label: item.value },
            ])
          }}
          options={eventsAndData['options'].value}
          placeholder="Ваши экспертизы"
          noOptionsMessage="Ничего не найдено"
        />
      </Row>
      <Row>
        <Chips
          items={eventsAndData['userList'].value}
          onRemoveItem={id => {
            const index = eventsAndData['userList'].value.findIndex((el: any) => el.id === id)

            eventsAndData['userList'].value.splice(index, 1)
            eventsAndData['userList'].set([...eventsAndData['userList'].value])
          }}
        />
      </Row>
    </Container>
  )
}

const Container = styled.div``

const Row = styled.div`
  margin: 10px 0 10px 0;
  max-width: 500px;
`
