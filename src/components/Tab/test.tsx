import React from 'react'

import { render } from 'utils/test-utils'

import Tab from '.'

describe('<Tab />', () => {
  it('should render Component', () => {
    const onSelectTab = jest.fn()

    render(
      <Tab
        tabIndex={1}
        title="Tab"
        data-id="action_test"
        onSelectTab={onSelectTab}
      />
    )
  })
})
