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

export type ListProps = {
  children: React.ReactNode
  circle?: boolean
  mt?: SpacingProps
  mb?: SpacingProps
}

const List = ({
  circle = false,
  children,
  mb = '',
  mt = '',
  ...props
}: ListProps) => (
  <S.Wrapper circle={circle} mb={mb} mt={mt} {...props}>
    {children}
  </S.Wrapper>
)

export default List
