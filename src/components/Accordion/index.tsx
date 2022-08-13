import React, { useState } from 'react'

import { SpacingProps } from 'types/generics'

import * as S from './styles'

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
  mb = 'xxxs',
  mt = '',
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
