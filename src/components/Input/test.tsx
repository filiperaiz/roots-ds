import React from 'react'

import { render } from 'utils/test-utils'

import Input from '.'

describe('<Input />', () => {
  it('should render Component', () => {
    const onChange = jest.fn()
    render(
      <Input
        data-id="action_test"
        id="default"
        label="teste"
        value="name"
        onChange={onChange}
      />
    )
  })
})
