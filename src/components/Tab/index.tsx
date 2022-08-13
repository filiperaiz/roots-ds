import React from 'react'

import * as S from './styles'

export type TabProps = {
  title?: string
  tabIndex: number
  active?: boolean
  onSelectTab: (tabIndex: number) => void
}

const Tab = ({
  tabIndex,
  active = false,
  onSelectTab,
  title,
  ...props
}: TabProps) => (
  <S.Wrapper onClick={() => onSelectTab(tabIndex)} active={active} {...props}>
    <h5>{title}</h5>
  </S.Wrapper>
)

Tab.Container = S.TabContainer
Tab.Links = S.TabLinks
Tab.Content = S.TabContent

export default Tab
