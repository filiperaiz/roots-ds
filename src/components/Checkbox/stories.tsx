import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    'data-id': 'action_test',
    children: 'Checkbox'
  },
  parameters: {
    controls: { expanded: true }
  }
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({})

Default.args = {
  id: 'checkbox-1'
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: 'checkbox-2',
  disabled: true
}

export const Error = Template.bind({})

Error.args = {
  id: 'checkbox-3',
  error: true
}
