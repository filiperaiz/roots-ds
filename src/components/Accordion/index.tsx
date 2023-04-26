import React, { useState } from 'react'

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

export type AccordionProps = {
  children: React.ReactNode
  title?: string
  active?: boolean
  mt?: SpacingProps
  mb?: SpacingProps
}

const Accordion = ({
  children,
  title,
  active = false,
  mt = 's0',
  mb = 's16',
  ...props
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(active)

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <S.Wrapper mb={mb} mt={mt} {...props}>
      <S.Title active={isOpen} onClick={handleToggle}>
        {title}
      </S.Title>
      <S.Content active={isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Accordion
