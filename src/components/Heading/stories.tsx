import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Heading from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {},
  args: {
    'data-id': 'action_test'
  },
  parameters: {
    controls: { expanded: true }
  }
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Lorem ipsum dolor sit. kjhkj '
}
