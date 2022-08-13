import React from 'react'

import { render } from 'utils/test-utils'

import Text from '.'

describe('<Text />', () => {
  it('should render Component', () => {
    render(<Text data-id="action_test">Text</Text>)
  })
})
