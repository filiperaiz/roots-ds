import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

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

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg'
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'primary-link'
    | 'danger'
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
  mt = 's0',
  mb = 's16',
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
