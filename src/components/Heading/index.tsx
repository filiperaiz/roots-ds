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
  mt = 's0',
  mb = 's16',
  ...props
}: HeadingProps) => (
  <S.Wrapper as={tag} color={color} align={align} mt={mt} mb={mb} {...props}>
    {children}
  </S.Wrapper>
)

export default Heading
