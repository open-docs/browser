import React from 'react'
import {observer} from 'mobx-react'
import {MODAL_NAMES} from '../consts'

const Menu = ({store}) => {
  return store.loading ? null : (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <a className='navbar-brand' href='javascript:void(0)' onClick={() => store.showModal(MODAL_NAMES.TITLE)}>title</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <a className='nav-item nav-link' onClick={() => store.showModal(MODAL_NAMES.PERMS)} href='javascript:void(0)'>Oprávnění</a>
          <a className='nav-item nav-link active' onClick={() => store.showModal(MODAL_NAMES.SUBSTS)} href='javascript:void(0)'>Substituce</a>
        </div>
      </div>
    </nav>
  )
}

export default observer(Menu)
