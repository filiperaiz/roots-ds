import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import Accordion from '.'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (args) => (
    <div>
      <Accordion {...args} />
      <Accordion {...args} />
      <Accordion {...args} />
    </div>
  ),
  args: {
    children: 'Lorem ipsum dolor sit.',
    title: 'Accordion'
  }
}
