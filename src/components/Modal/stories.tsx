import { Meta, StoryObj } from '@storybook/react'

import Modal from '.'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
  args: {},
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    onClose: () => {
      console.log('close')
    },
    modalTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
}
