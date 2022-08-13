import React from 'react'

import { render } from 'utils/test-utils'

import Widget from '.'

describe('<Widget />', () => {
  it('should render Component', () => {
    render(<Widget data-id="action_test">Widget</Widget>)
  })
})
