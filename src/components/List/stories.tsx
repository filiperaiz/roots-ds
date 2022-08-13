import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import List from '.'

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
  args: {
    'data-id': 'action_test'
  },
  parameters: {
    controls: { expanded: true }
  }
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <li>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi
        optio porro nulla obcaecati laudantium maxime. Minus eveniet laudantium
        nobis consectetur mollitia architecto aliquam repudiandae maiores.
        Consectetur corporis architecto consequatur!
      </p>
    </li>
    <li>
      <p>teste</p>
    </li>
    <li>
      <p>teste</p>
    </li>
    <li>
      <p>teste</p>
    </li>
  </List>
)

export const Default = Template.bind({})

Default.args = {}
