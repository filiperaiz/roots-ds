import React from 'react'

import { render } from 'utils/test-utils'

import Modal from '.'

describe('<Modal />', () => {
  it('should render Component', () => {
    const onClose = jest.fn()

    render(
      <Modal
        data-id="action_test"
        active
        onClose={onClose}
        modalTitle="Modal Title"
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Modal>
    )
  })
})
