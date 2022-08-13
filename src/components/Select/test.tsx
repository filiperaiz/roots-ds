import React from 'react'

import { render } from 'utils/test-utils'

import Select from '.'

describe('<Select />', () => {
  it('should render Component', () => {
    const onChange = jest.fn()

    const options = [
      {
        label: '',
        value: ''
      },
      {
        label: 'Option 1',
        value: 'valueOption1'
      },
      {
        label: 'Option 2',
        value: 'valueOption2'
      },
      {
        label: 'Option 3',
        value: 'valueOption3'
      }
    ]

    render(
      <Select
        data-id="action_test"
        label="Ocupação"
        id="occupation"
        options={options}
        onChange={onChange}
      />
    )
  })
})
