import React from 'react'

import { render } from 'utils/test-utils'

import Loader from '.'

describe('<Loader />', () => {
  it('should render Component', () => {
    render(<Loader data-id="action_test" />)
  })
})
