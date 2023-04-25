import { Meta, StoryObj } from '@storybook/react'

import Widget from '.'

const meta: Meta<typeof Widget> = {
  title: 'Components/Widget',
  component: Widget,
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

type Story = StoryObj<typeof Widget>

export const Default: Story = {
  args: {
    children: 'Widget'
  }
}
