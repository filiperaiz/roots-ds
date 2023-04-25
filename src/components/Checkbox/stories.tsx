import { Meta, StoryObj } from '@storybook/react'

import Checkbox from '.'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    children: 'Checkbox'
  },
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    id: 'checkbox-1'
  }
}

export const Disabled: Story = {
  args: {
    id: 'checkbox-2',
    disabled: true
  }
}

export const Error: Story = {
  args: {
    id: 'checkbox-3',
    error: true
  }
}
