import { useState, useEffect } from 'react'
import ModalService from './ModalService'

export default function ModalRoot() {
  const [modal, setModal] = useState({} as any)

  useEffect(() => {
    ModalService.on('open', ({ component, props }) => {
      setModal({
        component,
        props,
        close: () => {
          setModal({} as any)
        },
      })
    })
  }, [])

  const ModalComponent = modal.component ? modal.component : null

  return (
    <section
      className={modal.component ? 'fixed top-0 w-full h-full z-40' : ''}
    >
      {ModalComponent && (
        <ModalComponent
          {...modal.props}
          close={modal.close}
          className={ModalComponent ? 'd-block' : ''}
        />
      )}
    </section>
  )
}
