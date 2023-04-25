import { Meta, StoryObj } from '@storybook/react'

import Heading from '.'

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {},
  args: {},
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Heading'
  }
}
