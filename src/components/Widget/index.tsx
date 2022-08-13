import React from 'react'

import * as S from './styles'

type SpacingProps =
  | ''
  | 'min'
  | 'nano'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxl'

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
