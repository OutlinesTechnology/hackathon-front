import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Routers } from '../components/Routers'

export const Root: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Routers />
    </Router>
  )
}
