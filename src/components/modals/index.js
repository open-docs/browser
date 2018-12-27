import React from 'react'
import {observer} from 'mobx-react'
import {Modal, Button} from 'react-bootstrap'
import {MODAL_NAMES} from '../../consts'
import AddDocForm from './addDoc'

const ModalEditor = ({store}) => {
  //
  function _createForm () {
    switch (store.activeModal) {
      case MODAL_NAMES.ADD_DOC: return <AddDocForm store={store.modalStore} />
    }
  }

  return store.activeModal === null ? null : (
    <div className='static-modal'>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{store.modalStore.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body><form>{_createForm()}</form></Modal.Body>

        <Modal.Footer>
          <Button bsStyle='primary' disabled={store.modalStore.error !== false}
            onClick={() => store.modalStore.save()}>Uloz</Button>
          <Button onClick={() => store.closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default observer(ModalEditor)
