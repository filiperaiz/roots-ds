import { Meta, StoryObj } from '@storybook/react'

import Text from '.'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {},
  args: {},
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit.'
  }
}
