import React from 'react'

import { SpacingProps } from 'types/generics'

import * as S from './styles'

export type TextProps = {
  children: React.ReactNode
  tag?: 'p' | 'span' | 'label'
  align?: 'start' | 'end' | 'center' | 'inherit'
  mt?: SpacingProps
  mb?: SpacingProps
  color?: string
  bold?: boolean
  size?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
}

const Text = ({
  children,
  tag = 'p',
  color,
  align = 'start',
  size = 'xs',
  mt = '',
  mb = '',
  bold,
  ...props
}: TextProps) => (
  <S.Wrapper
    as={tag}
    color={color}
    align={align}
    size={size}
    mt={mt}
    mb={mb}
    bold={bold}
    {...props}
  >
    {children}
  </S.Wrapper>
)

export default Text
