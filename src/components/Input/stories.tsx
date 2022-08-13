import React, { useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from '.'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    mask: {
      type: 'string' || {}
    }
  },
  args: {
    'data-id': 'action_test'
  },
  parameters: {
    controls: { expanded: true }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('')
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => setValue(e.target.value)

  return <Input {...args} value={value} onChange={handleChange} />
}

export const Default = Template.bind({})

Default.args = {
  label: 'Nome do campo',
  type: 'text'
}

export const Disabled = Template.bind({})

Disabled.args = {
  label: 'Nome do campo',
  type: 'text',
  disabled: true
}

export const Password = Template.bind({})

Password.args = {
  label: 'Sua senha',
  type: 'password'
}

export const Error = Template.bind({})

Error.args = {
  label: 'Nome do campo',
  type: 'text',
  errorMessage: 'Campo obrigatório'
}

export const Money = Template.bind({})

Money.args = {
  label: 'Nome do campo',
  type: 'text',
  currency: true
}
