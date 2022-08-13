import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from '.'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {},
  args: {
    'data-id': 'action_test'
  },
  parameters: {
    controls: { expanded: true }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Lorem ipsum dolor sit.'
}
