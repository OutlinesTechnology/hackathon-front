import React from 'react'
import { Paragraph } from '@holism/core'
import styled from 'styled-components'

import { BriefcaseIcon } from '@holism/icons'

export const Main: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Icon>
        <BriefcaseIcon color="#fff" size={20} />
      </Icon>
      <Title size={18} lineHeight={24}>
        text
      </Title>
    </Container>
  )
}

const Icon = styled.div`
  padding: 2px 3px 4px 3px;
  background: #262c40;
  border-radius: 50%;
  margin-bottom: 21px;
  margin-top: 120px;
`

const Title = styled(Paragraph)`
  text-align: center;
  padding-bottom: 56px;
  color: #262c40;
  width: 350px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
`
