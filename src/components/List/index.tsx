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

export type ListProps = {
  children: React.ReactNode
  circle?: boolean
  mt?: SpacingProps
  mb?: SpacingProps
}

const List = ({
  circle = false,
  children,
  mt = 's0',
  mb = 's0',
  ...props
}: ListProps) => (
  <S.Wrapper circle={circle} mb={mb} mt={mt} {...props}>
    {children}
  </S.Wrapper>
)

export default List
