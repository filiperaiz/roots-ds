import React from 'react'
import { MdInfo } from 'react-icons/md'
import { RiCloseFill } from 'react-icons/ri'

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

export type AlertProps = {
  children: React.ReactNode
  variant?: 'info' | 'warning' | 'success' | 'error'
  mt?: SpacingProps
  mb?: SpacingProps
  close?: boolean
  onClose?: () => void
}

const Alert = ({
  children,
  variant = 'info',
  mb = 'xxxs',
  mt = '',
  close = false,
  onClose,
  ...props
}: AlertProps) => (
  <S.Wrapper variant={variant} mb={mb} mt={mt} {...props}>
    <MdInfo className="icon info" />
    <S.Text>{children}</S.Text>

    {close && <RiCloseFill className="icon close" onClick={onClose} />}
  </S.Wrapper>
)

export default Alert
