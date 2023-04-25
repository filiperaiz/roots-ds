import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import List from '.'

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  argTypes: {},
  args: {},
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

type Story = StoryObj<typeof List>

export const Default: Story = {
  render: (args) => (
    <List {...args}>
      <li>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          sequi optio porro nulla obcaecati laudantium maxime. Minus eveniet
          laudantium nobis consectetur mollitia architecto aliquam repudiandae
          maiores. Consectetur corporis architecto consequatur!
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
  ),
  args: {}
}
