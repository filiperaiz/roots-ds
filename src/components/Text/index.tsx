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

export type TextProps = {
  children: React.ReactNode
  tag?: 'p' | 'span' | 'label'
  align?: 'start' | 'end' | 'center' | 'inherit'
  mt?: SpacingProps
  mb?: SpacingProps
  color?: string
  bold?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Text = ({
  children,
  tag = 'p',
  color,
  align = 'start',
  size = 'xs',
  mt = 's0',
  mb = 's0',
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
