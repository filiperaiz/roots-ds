import React from 'react'

import { render } from 'utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('should render Component', () => {
    render(<Heading data-id="action_test">Heading</Heading>)
  })
})
