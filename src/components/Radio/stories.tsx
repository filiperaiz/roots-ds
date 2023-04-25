import React, { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import Radio from '.'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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

type Story = StoryObj<typeof Radio>

const Component = (args: Story) => {
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

export const Default: Story = {
  render: (args) => <Component {...args} />,
  args: {}
}

export const Disabled: Story = {
  args: {
    text: 'content',
    id: 'check-1',
    value: '1',
    name: 'checkbox1',
    disabled: true
  }
}

export const Error: Story = {
  args: {
    text: 'content',
    id: 'check-1',
    value: '1',
    name: 'checkbox1',
    error: true
  }
}
