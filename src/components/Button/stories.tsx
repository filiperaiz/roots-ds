import React from 'react'
import { MdVisibility } from 'react-icons/md'

import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button'
  }
}

export const Icon: Story = {
  args: {
    children: 'Button',
    icon: <MdVisibility />
  }
}

export const Disabled: Story = {
  args: {
    children: 'Button disabled',
    disabled: true
  }
}

export const asLink: Story = {
  args: {
    children: 'Link button',
    as: 'a',
    href: '/link'
  }
}
