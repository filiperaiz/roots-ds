import React from 'react'

import * as S from './styles'

type SpacingProps =
  | 's0'
  | 's2'
  | 's8'
  | 's12'
  | 's16'
  | 's20'
  | 's32'
  | 's40'
  | 's48'
  | 's64'
  | 's80'
  | 's96'
  | 's128'
  | 's160'
  | 's192'
  | 's224'
  | 's256'

export type WidgetProps = {
  children?: React.ReactNode
  mt?: SpacingProps
  mb?: SpacingProps
}

const Widget = ({ children, mb = 's0', mt = 's0', ...props }: WidgetProps) => (
  <S.Wrapper mb={mb} mt={mt} {...props}>
    {children}
  </S.Wrapper>
)

export default Widget
