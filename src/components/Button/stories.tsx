import React from 'react'
import { MdVisibility } from 'react-icons/md'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    'data-id': 'action_test'
  },
  parameters: {
    controls: { expanded: true }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button'
}

export const Icon = Template.bind({})

Icon.args = {
  children: 'Button',
  icon: <MdVisibility />
}

export const Disabled = Template.bind({})

Disabled.args = {
  children: 'Button disabled',
  disabled: true
}

export const asLink = Template.bind({})

asLink.args = {
  children: 'Link button',
  as: 'a',
  href: '/link'
}
