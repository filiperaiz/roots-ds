import { Meta, StoryObj } from '@storybook/react'

import Alert from '.'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {},
  parameters: {
    controls: { expanded: true }
  }
}
export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor'
  }
}
