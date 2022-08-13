import React from 'react'

import * as S from './styles'

const Loader = ({ ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.Spinner />
      <S.TextLoader />
    </S.Wrapper>
  )
}

export default Loader
