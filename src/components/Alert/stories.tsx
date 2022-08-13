import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Alert from '.'

export default {
  title: 'Components/Alert',
  component: Alert,
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
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Default = Template.bind({})

Default.args = {
  children:
    'Lembre-se de olhar na caixa de lixo eletrônico (spam), para garantir que recebeu o e-mail.'
}
