import React, { useState } from 'react'
import styled from 'styled-components'
import { H3, H1, Paragraph, Button, InputSuggest } from '@holism/core'
import { optionsData } from '../utils'
import { getSuggestions, IPropsItem } from 'pages/SignUp/utils'

export const Main: React.FC = (): JSX.Element => {
  const [stateOne, setStateOne] = useState(optionsData)

  return (
    <>
      <HeaderBg>
        <Header>
          <Username>Привет, Екатерина!</Username>
          <Button view="rounded" dimension="small">
            Создать проект
          </Button>
        </Header>
        <Header>
          <InputSuggest
            width="100%"
            onChange={val => {
              const isFoundSuggestions = optionsData.some(
                (el: IPropsItem) =>
                  typeof el.label === 'string' && el.label.includes(val.toLocaleLowerCase())
              )

              isFoundSuggestions ? setStateOne(getSuggestions(val, optionsData)) : setStateOne([])
            }}
            getSuggestionsProp={getSuggestions}
            onSelect={item => console.log('onSelect', item)}
            options={stateOne}
            placeholder="Введите название проекта, профессии или ключевое слово"
            noOptionsMessage="Ничего не найдено"
          />
        </Header>
      </HeaderBg>
      <Content>
        <Container>
          <H1>Проекты банка в поисках команды</H1>
          <Paragraph color="#545454" size={16} lineHeight={14}>
            Подборка очень актуальных проектов. Оставяйте заявки на участие :)
          </Paragraph>

          <ListItemTop>
            <ItemTop>Машинное обучение в опционном...</ItemTop>
            <ItemTop>Машинное обучение в опционном...</ItemTop>
          </ListItemTop>

          <H1>Лента проектов</H1>

          <ListItem>
            <Item>
              <Flex>
                <Rate>200</Rate>
                <Texts>
                  <Title>Чат-бот для поддержки клиентов</Title>
                  <User>Алексей Колесников</User>
                </Texts>
                <Tags>
                  <Tag>Клиентоцентричность</Tag>
                  <Tag>Машинное обучение</Tag>
                </Tags>
              </Flex>
              <Comments>Comments: 23</Comments>
            </Item>
            <Item>
              <Flex>
                <Rate>200</Rate>
                <Texts>
                  <Title>Чат-бот для поддержки клиентов</Title>
                  <User>Алексей Колесников</User>
                </Texts>
                <Tags>
                  <Tag>Клиентоцентричность</Tag>
                  <Tag>Машинное обучение</Tag>
                </Tags>
              </Flex>
              <Comments>Comments: 23</Comments>
            </Item>
            <Item>
              <Flex>
                <Rate>200</Rate>
                <Texts>
                  <Title>Чат-бот для поддержки клиентов</Title>
                  <User>Алексей Колесников</User>
                </Texts>
                <Tags>
                  <Tag>Клиентоцентричность</Tag>
                  <Tag>Машинное обучение</Tag>
                </Tags>
              </Flex>
              <Comments>Comments: 23</Comments>
            </Item>
            <Item>
              <Flex>
                <Rate>200</Rate>
                <Texts>
                  <Title>Чат-бот для поддержки клиентов</Title>
                  <User>Алексей Колесников</User>
                </Texts>
                <Tags>
                  <Tag>Клиентоцентричность</Tag>
                  <Tag>Машинное обучение</Tag>
                </Tags>
              </Flex>
              <Comments>Comments: 23</Comments>
            </Item>
            <Item>
              <Flex>
                <Rate>200</Rate>
                <Texts>
                  <Title>Чат-бот для поддержки клиентов</Title>
                  <User>Алексей Колесников</User>
                </Texts>
                <Tags>
                  <Tag>Клиентоцентричность</Tag>
                  <Tag>Машинное обучение</Tag>
                </Tags>
              </Flex>
              <Comments>Comments: 23</Comments>
            </Item>
          </ListItem>
        </Container>
      </Content>
    </>
  )
}

const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`

const Tag = styled.div`
  border-radius: 9.1px;
  background-color: #e9f1f9;
  font-size: 0.6em;
  letter-spacing: 0.07px;
  color: rgba(0, 12, 26, 0.8);
  align-items: center;
  justify-content: center;
  padding: 4px;
`

const Flex = styled.div`
  display: flex;
`

const Comments = styled.div`
  font-size: 0.7em;
  line-height: 4.41;
  letter-spacing: 0.09px;
  text-align: left;
  color: rgba(0, 12, 26, 0.6);
`

const Title = styled.div`
  font-size: 1em;
  font-weight: 500;
`

const User = styled.div`
  font-size: 0.7em;
  font-weight: normal;
`

const Texts = styled.div`
  margin-left: 0.6em;
`

const Rate = styled.div`
  width: 3em;
  height: 3em;
  background-color: #0057b6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  justify-content: center;
  color: #fff;
`

const Item = styled.div`
  color: #000;
  height: 50px;
  width: 100%;
  margin-bottom: 10px;
  font-family: 'Proxima Nova', sans-serif;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #262c40;
  justify-content: space-between;
`

const ListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 630px;
`

const ItemTop = styled.div`
  color: white;
  height: 100%;
  background: #498dde;
  padding: 8px;
  font-weight: 600;
  border-radius: 5px;
  display: flex;
  width: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: Proxima Nova, sans-serif;
  font-size: 0.9em;
  line-height: 1.29;
  letter-spacing: 0.17px;
`

const ListItemTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 630px;
`

const Container = styled.div`
  width: 700px;
`

const Username = styled(H3)`
  font-family: 'Proxima Nova', sans-serif;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
`
const HeaderBg = styled.div`
  min-height: 4em;
  background-color: #e9f1f9;
  padding: 15px 0;
`
