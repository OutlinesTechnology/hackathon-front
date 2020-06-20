import React from 'react'
import styled from 'styled-components'
import { H3, H1, Paragraph, Button } from '@holism/core'

export const Main: React.FC = (): JSX.Element => {
  return (
    <>
      <HeaderBg>
        <Header>
          <Username>Привет, Екатерина!</Username>
          <Button view="rounded" dimension="small">
            Создать проект
          </Button>
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
              </Flex>
              <Comments>Comments: 23</Comments>
            </Item>
          </ListItem>
        </Container>
      </Content>
    </>
  )
}

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
  max-width: 530px;
`

const ItemTop = styled.div`
  color: white;
  height: 100%;
  background: #498dde;
  padding: 10px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  width: 100px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: 'Proxima Nova', sans-serif;
`

const ListItemTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 530px;
`

const Container = styled.div`
  width: 600px;
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
  max-width: 600px;
  margin: 0 auto;
`
const HeaderBg = styled.div`
  height: 4em;
  background-color: #e9f1f9;
`
