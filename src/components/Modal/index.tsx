import React from 'react'

import * as S from './styles'

export type ModalProps = {
  children: React.ReactNode
  active?: boolean
  closeOutside?: boolean
  onClose: () => void
  modalTitle: string
  closeButton?: boolean
}

const Modal = ({
  children,
  active = true,
  closeOutside = false,
  onClose,
  modalTitle = '',
  closeButton = true,
  ...props
}: ModalProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleOnCloseOutside = ({ target }) => {
    if (!closeOutside) return
    if (target && target.classList.contains('modal-content')) {
      onClose()
    }
  }

  return (
    <>
      {active && (
        <S.Overlay className="modal-content" onClick={handleOnCloseOutside}>
          <S.Wrapper {...props}>
            {closeButton && (
              <S.CloseButton data-id="btn_close_modal" onClick={onClose} />
            )}

            {modalTitle && <S.Title>{modalTitle}</S.Title>}

            <S.Content>{children}</S.Content>
          </S.Wrapper>
        </S.Overlay>
      )}
    </>
  )
}

export default Modal
