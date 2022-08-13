import React from 'react'

import { render } from 'utils/test-utils'

import List from '.'

describe('<List />', () => {
  it('should render Component', () => {
    render(
      <List data-id="action_test">
        <li> I am a List</li>
        <li> I am a List</li>
        <li> I am a List</li>
      </List>
    )
  })
})
