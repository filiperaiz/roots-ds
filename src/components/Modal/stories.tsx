import React from 'react'

import Text from 'components/Text'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Modal from '.'

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
  args: {
    'data-id': 'action_test'
  },
  parameters: {
    controls: { expanded: true }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})

Default.args = {
  onClose: () => {
    console.log('close')
  },
  modalTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  children: (
    <>
      <Text mb="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudianda e
        consectetur nostrum temporibus eius ea minima! Officiis dolore,
        voluptates culpa, tenetur quibusdam impedit excepturi deleniti,
        explicabo maiores consequatur adipisci dolores.Lorem ipsum dolor sit
        amet consectetur adipisicing elit.
      </Text>
      <Text mb="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudianda e
        consectetur nostrum temporibus eius ea minima! Officiis dolore,
        voluptates culpa, tenetur quibusdam impedit excepturi deleniti,
        explicabo maiores consequatur adipisci dolores.Lorem ipsum dolor sit
        amet consectetur adipisicing elit.
      </Text>
      <Text mb="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudianda e
        consectetur nostrum temporibus eius ea minima! Officiis dolore,
        voluptates culpa, tenetur quibusdam impedit excepturi deleniti,
        explicabo maiores consequatur adipisci dolores.Lorem ipsum dolor sit
        amet consectetur adipisicing elit.
      </Text>
      <Text mb="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudianda e
        consectetur nostrum temporibus eius ea minima! Officiis dolore,
        voluptates culpa, tenetur quibusdam impedit excepturi deleniti,
        explicabo maiores consequatur adipisci dolores.Lorem ipsum dolor sit
        amet consectetur adipisicing elit.
      </Text>
      <Text mb="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudianda e
        consectetur nostrum temporibus eius ea minima! Officiis dolore,
        voluptates culpa, tenetur quibusdam impedit excepturi deleniti,
        explicabo maiores consequatur adipisci dolores.Lorem ipsum dolor sit
        amet consectetur adipisicing elit.
      </Text>
      <Text mb="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudianda e
        consectetur nostrum temporibus eius ea minima! Officiis dolore,
        voluptates culpa, tenetur quibusdam impedit excepturi deleniti,
        explicabo maiores consequatur adipisci dolores.Lorem ipsum dolor sit
        amet consectetur adipisicing elit.
      </Text>
    </>
  )
}
