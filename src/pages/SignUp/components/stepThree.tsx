import React, { useState } from 'react'
import { InputSuggest, Chips } from '@holism/core'
import styled from 'styled-components'

const getSuggestions = (value: string, options: any[]) =>
  options.filter((option: any) => option && option.label.includes(value.toLocaleLowerCase()))

const optionsData = [
  {
    label: 'финансовая грамотность',
    value: 'Финансовая грамотность',
    caption: 'Финансовая грамотность',
  },
  {
    label: 'платежные технологии',
    value: 'Платежные технологии',
    caption: 'Платежные технологии',
  },
  { label: 'openBanking', value: 'OpenBanking', caption: 'OpenBanking' },
  {
    label: 'кибербезопасность',
    value: 'Кибербезопасность',
    caption: 'Кибербезопасность',
  },
  { label: 'роботизация', value: 'Роботизация', caption: 'Роботизация' },
  {
    label: 'лучшие практики UI UX',
    value: 'Лучшие практики UI UX',
    caption: 'Лучшие практики UI UX',
  },
  {
    label: 'digital marketing',
    value: 'Digital marketing',
    caption: 'Digital marketing',
  },
  {
    label: 'блокчейн',
    value: 'Блокчейн',
    caption: 'Блокчейн',
  },
]

export const StepThree: React.FC = (): JSX.Element => {
  const [stateOne, setStateOne] = useState<any>(optionsData)
  const [list, setList] = useState<any>([])

  return (
    <>
      <Row>
        <InputSuggest
          onChange={val => {
            const isFoundSuggestions = optionsData.some(el => el.label.includes(val))

            isFoundSuggestions ? setStateOne(getSuggestions(val, optionsData)) : setStateOne([])
          }}
          getSuggestionsProp={getSuggestions}
          onSelect={(item: any) => setList([...list, { id: item.value, label: item.value }])}
          options={stateOne}
          placeholder="Ваши эспертизы"
          noOptionsMessage="Ничего не найдено"
        />
      </Row>
      <Row>
        <Chips
          items={list}
          onRemoveItem={id => {
            const index = list.findIndex((el: any) => el.id === id)

            list.splice(index, 1)
            setList([...list])
          }}
        />
      </Row>
    </>
  )
}

const Row = styled.div`
  margin: 10px 0 10px 0;
  max-width: 500px;
`
