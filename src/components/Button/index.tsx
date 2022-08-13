import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { SpacingProps } from 'types/generics'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg'
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'primary-link'
    | 'secondary'
    | 'secondary-outline'
    | 'secondary-link'
    | 'info'
    | 'error'
    | 'warning'
    | 'success'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'pill' | 'circle'
  mt?: SpacingProps
  mb?: SpacingProps
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'md',
  variant = 'primary',
  radius = 'sm',
  mb = 'xxxs',
  mt = '',
  icon,
  iconPosition = 'left',
  fullWidth,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    variant={variant}
    mb={mb}
    mt={mt}
    radius={radius}
    iconPosition={iconPosition}
    fullWidth={fullWidth}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
