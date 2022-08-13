import React from 'react'

import { render } from 'utils/test-utils'

import Radio from '.'

describe('<Radio />', () => {
  it('should render Component', () => {
    const onClick = jest.fn()
    const onChange = jest.fn()

    render(
      <Radio
        data-id="action_test"
        id="rb-2"
        className="radio-button"
        name="radio"
        value="10"
        onClick={onClick}
        onChange={onChange}
        text="Não"
      />
    )
  })
})
