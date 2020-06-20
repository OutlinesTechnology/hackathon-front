import React from 'react'
// import { Paragraph } from '@holism/core'
import styled from 'styled-components'

export const Main: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Header>213</Header>
      <Content>sdafa</Content>
    </Container>
  )
}

const Content = styled.div``

const Header = styled.div``

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
`
