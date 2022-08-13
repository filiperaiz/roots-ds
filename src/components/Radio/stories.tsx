import React, { useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Radio from '.'

export default {
  title: 'Components/Radio',
  component: Radio,
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
} as ComponentMeta<typeof Radio>

const TemplateDefault: ComponentStory<typeof Radio> = (args) => {
  const [selected, setSelected] = useState(1)

  const data = {
    val1: 1,
    val2: 2
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleToggleRadio = (e) => {
    setSelected(e.currentTarget.value)
  }

  return (
    <>
      <Radio
        {...args}
        value={data.val1}
        checked={selected.toString() === data.val1.toString()}
        onClick={handleToggleRadio}
        text="Sim"
        id="yes"
        name="radio"
      />
      <br />
      <Radio
        {...args}
        value={data.val2}
        checked={selected.toString() === data.val2.toString()}
        onClick={handleToggleRadio}
        text="Não"
        id="no"
        name="radio"
      />
    </>
  )
}

export const Default = TemplateDefault.bind({})

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Disabled = Template.bind({})

Disabled.args = {
  text: 'content',
  id: 'check-1',
  value: '1',
  name: 'checkbox1',
  disabled: true
}

export const Error = Template.bind({})

Error.args = {
  text: 'content',
  id: 'check-1',
  value: '1',
  name: 'checkbox1',
  error: true
}
