/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import Tab from '.'

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {},
  args: {},
  parameters: {
    controls: { expanded: true }
  }
}

export default meta

type Story = StoryObj<typeof Tab>

const Component = (args: any) => {
  const [activeTab, setActiveTab] = useState(1)

  const handleActiveTab = (index: number) => setActiveTab(index)

  return (
    <Tab.Container>
      <Tab.Links>
        <Tab
          {...args}
          tabIndex={1}
          active={activeTab === 1}
          onSelectTab={handleActiveTab}
          title="Compra"
          data-id="tab_compra"
        />
        <Tab
          {...args}
          tabIndex={2}
          active={activeTab === 2}
          onSelectTab={handleActiveTab}
          title="Contrato"
          data-id="tab_contrato"
        />
        <Tab
          {...args}
          tabIndex={3}
          active={activeTab === 3}
          onSelectTab={handleActiveTab}
          title="Parcelas"
          data-id="tab_parcelas"
        />
      </Tab.Links>

      <Tab.Content active={activeTab === 1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Tab.Content>

      <Tab.Content active={activeTab === 2}>
        Egestas tellus pulvinar. Praesent sed mi efficitur, facilisis lacus ac,
        laoreet nisi.
      </Tab.Content>
      <Tab.Content active={activeTab === 3}>
        Vestibulum malesuada velit at
      </Tab.Content>
    </Tab.Container>
  )
}

export const Default: Story = {
  render: (args) => <Component {...args} />,
  args: {}
}
