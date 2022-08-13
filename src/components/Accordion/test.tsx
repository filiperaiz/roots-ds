import React from 'react'

import { render, screen } from 'utils/test-utils'

import Accordion from '.'

const props = {
  title: 'Accordion',
  'data-id': 'action_test'
}

describe('<Accordion />', () => {
  it('should render Component', () => {
    render(<Accordion {...props}>Lorem</Accordion>)
  })

  it('should render the heading', () => {
    render(
      <Accordion {...props}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </Accordion>
    )

    expect(
      screen.getByRole('heading', { name: /Accordion/i })
    ).toBeInTheDocument()
  })
})
