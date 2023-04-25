import React, { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import Select from '.'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    name: {
      type: 'string'
    }
  },
  args: {},
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

type Story = StoryObj<typeof Select>

const Component = (args: Story) => {
  const options = [
    {
      label: '',
      value: ''
    },
    {
      label: 'Option 1',
      value: 'valueOption1'
    },
    {
      label: 'Option 2',
      value: 'valueOption2'
    },
    {
      label: 'Option 3',
      value: 'valueOption3'
    }
  ]

  const [value, setValue] = useState('valueOption1')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setValue(event.target.value)

  return (
    <Select
      id="select"
      label="Nome do campo"
      options={options}
      {...args}
      onChange={handleChange}
      value={value}
    />
  )
}

export const Default: Story = {
  render: (args) => <Component {...args} />,
  args: {}
}

export const Disabled: Story = {
  render: (args) => <Component {...args} />,
  args: {
    disabled: true
  }
}

export const Error: Story = {
  render: (args) => <Component {...args} />,
  args: {
    errorMessage: 'O campo é obrigatório'
  }
}
