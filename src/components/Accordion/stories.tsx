import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Accordion from '.'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  parameters: {
    controls: { expanded: true }
  }
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <div>
    <Accordion {...args} />
    <Accordion {...args} />
    <Accordion {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  title: 'Accordion'
}
