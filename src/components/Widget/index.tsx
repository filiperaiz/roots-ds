import React from 'react'

import { SpacingProps } from 'types/generics'

import * as S from './styles'

export type WidgetProps = {
  children?: React.ReactNode
  mt?: SpacingProps
  mb?: SpacingProps
}

const Widget = ({ children, mb = '', mt = '', ...props }: WidgetProps) => (
  <S.Wrapper mb={mb} mt={mt} {...props}>
    {children}
  </S.Wrapper>
)

export default Widget
