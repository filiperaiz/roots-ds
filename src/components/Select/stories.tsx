import React, { useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from '.'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    name: {
      type: 'string'
    }
  },
  args: {
    'data-id': 'action_test',
    options: [
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
  },
  parameters: {
    controls: { expanded: true }
  }
} as ComponentMeta<typeof Select>

const TemplateDefault: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState('valueOption1')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setValue(event.target.value)

  return <Select {...args} onChange={handleChange} value={value} />
}

export const Default = TemplateDefault.bind({})

Default.args = {
  label: 'Ocupação',
  name: 'Select'
}

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Disabled = Template.bind({})

Disabled.args = {
  label: 'Ocupação',
  id: 'select',
  disabled: true
}

export const Error = Template.bind({})

Error.args = {
  label: 'Ocupação',
  id: 'select',
  errorMessage: 'O campo é obrigatório'
}
