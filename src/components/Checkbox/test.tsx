import React from 'react'

import { render, screen } from 'utils/test-utils'

import userEvent from '@testing-library/user-event'

import Checkbox from '.'

describe('<Checkbox />', () => {
  const onChange = jest.fn()

  it('should render with text', () => {
    render(
      <Checkbox id="checkbox-1" onChange={onChange}>
        Checkbox
      </Checkbox>
    )

    // input a partir do papel / role
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    // input a partir da label associada
    expect(screen.getByLabelText(/Checkbox/i)).toBeInTheDocument()

    // label a partir do texto dela
    expect(screen.getByText(/Checkbox/i)).toHaveAttribute('for', 'checkbox-1')
  })

  it('should render without text', () => {
    render(<Checkbox id="checkbox-1" onChange={onChange} />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should be accessible with tab', () => {
    render(
      <Checkbox id="checkbox-1" onChange={onChange}>
        Checkbox
      </Checkbox>
    )

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/Checkbox/i)).toHaveFocus()
  })
})
