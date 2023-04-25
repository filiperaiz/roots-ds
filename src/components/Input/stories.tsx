import React, { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import Input from '.'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    mask: {
      type: 'string' || {}
    }
  },
  args: {},
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

type Story = StoryObj<typeof Input>

const Component = (args: Story) => {
  const [value, setValue] = useState('')

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => setValue(e.target.value)

  return <Input {...args} value={value} onChange={handleChange} />
}

export const Default: Story = {
  render: (args) => <Component {...args} />,
  args: {
    label: 'Nome do campo',
    type: 'text'
  }
}

export const Disabled: Story = {
  render: (args) => <Component {...args} />,
  args: {
    ...Default.args,
    disabled: true
  }
}

export const Password: Story = {
  render: (args) => <Component {...args} />,
  args: {
    label: 'Sua senha',
    type: 'password'
  }
}

export const Error: Story = {
  render: (args) => <Component {...args} />,
  args: {
    ...Default.args,
    errorMessage: 'Campo obrigatório'
  }
}

export const Money: Story = {
  render: (args) => <Component {...args} />,
  args: {
    ...Default.args,
    currency: true
  }
}
