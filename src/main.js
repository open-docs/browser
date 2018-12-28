import React from 'react'
import ReactDOM from 'react-dom'
import AppStore from './stores/main'
import ContentView from './components/contentView'
import Menu from './components/menu'
import SideTree from './components/sideTree'
import PathView from './components/pathView'
import ModalManager from './components/modals'
import {DropdownButton, MenuItem} from 'react-bootstrap'
import {MODAL_NAMES, DOC_TYPES} from './consts'
// useStrict(true)

const store = new AppStore()
store.load(22)

const mount = document.getElementById('root')  // mountpoint

ReactDOM.render((
  <div style={{width: '100%'}}>
    <Menu store={store} />
    <ModalManager store={store} />
    <div className='row'>
      <div className='col-xs-2'>
        <DropdownButton bsStyle='primary' title={'+ novy'} id='addDd'>
          <MenuItem eventKey='1' onClick={() => {
            store.showModal(MODAL_NAMES.ADD_DOC, {typ: DOC_TYPES.FOLDER})
          }}>
            Slozka
          </MenuItem>
          <MenuItem eventKey='2'>Nahrat soubor</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4' onClick={() => {
            store.showModal(MODAL_NAMES.ADD_DOC, {typ: DOC_TYPES.TEXT})
          }}>Textovy dokument</MenuItem>
        </DropdownButton>
        <SideTree store={store.sideTree} />
      </div>
      <div className='col-xs-10'>
        <PathView store={store} />
        <ContentView store={store} />
      </div>
    </div>
  </div>
), mount)
