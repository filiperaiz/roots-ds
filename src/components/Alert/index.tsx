import React from 'react'
import { MdInfo } from 'react-icons/md'
import { RiCloseFill } from 'react-icons/ri'

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

export type AlertProps = {
  children: React.ReactNode
  variant?: 'info' | 'warning' | 'success' | 'danger'
  mt?: SpacingProps
  mb?: SpacingProps
  close?: boolean
  onClose?: () => void
}

const Alert = ({
  children,
  variant = 'info',
  mt = 's0',
  mb = 's16',
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
