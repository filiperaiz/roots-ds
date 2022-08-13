import React from 'react'

import { render, screen } from 'utils/test-utils'

import Alert from '.'

describe('<Alert />', () => {
  it('should render Component', () => {
    render(<Alert data-id="action_test">Alert</Alert>)

    expect(screen.getByText(/Alert/i)).toBeInTheDocument()
  })
})
