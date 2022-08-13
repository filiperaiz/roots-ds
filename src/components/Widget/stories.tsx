import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Widget from '.'

export default {
  title: 'Components/Widget',
  component: Widget,
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
} as ComponentMeta<typeof Widget>

const Template: ComponentStory<typeof Widget> = (args) => <Widget {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Widget'
}
