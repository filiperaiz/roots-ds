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

export type HeadingProps = {
  children: React.ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  align?: 'start' | 'end' | 'center' | 'inherit'
  mt?: SpacingProps
  mb?: SpacingProps
  color?: string
}

const Heading = ({
  children,
  tag = 'h1',
  color,
  align = 'start',
  mt = '',
  mb = 'xxxs',
  ...props
}: HeadingProps) => (
  <S.Wrapper as={tag} color={color} align={align} mt={mt} mb={mb} {...props}>
    {children}
  </S.Wrapper>
)

export default Heading
