import { Meta, StoryObj } from '@storybook/react'

import Loader from '.'

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    name: {
      type: 'string'
    }
  },
  args: {
    'data-id': 'action_test'
  },
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

type Story = StoryObj<typeof Loader>

export const Default: Story = {
  args: {}
}
