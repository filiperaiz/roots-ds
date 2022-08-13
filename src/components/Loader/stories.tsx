import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Loader from '.'

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    name: {
      type: 'string'
    }
  },
  args: {
    'data-id': 'action_test'
  },
  parameters: {
    controls: { expanded: true }
  }
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({})

Default.args = {}
