import React from 'react'
import {observer} from 'mobx-react'
import {MODAL_NAMES} from '../consts'

const Menu = ({store}) => {
  return store.loading ? null : (
    <nav className='navbar navbar-default'>
      <a className='navbar-brand' href='javascript:void(0)' onClick={() => store.showModal(MODAL_NAMES.TITLE)}>title</a>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <ul className='nav navbar-nav'>
          <li><a className='nav-item nav-link' onClick={() => store.showModal(MODAL_NAMES.PERMS)} href='javascript:void(0)'>Oprávnění</a></li>
          <li><a className='nav-item nav-link active' onClick={() => store.showModal(MODAL_NAMES.SUBSTS)} href='javascript:void(0)'>Substituce</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default observer(Menu)
