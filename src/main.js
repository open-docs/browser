import React from 'react'
import ReactDOM from 'react-dom'
import AppStore from './stores/main'
import ContentView from './components/contentView'
import Menu from './components/menu'
import SideTree from './components/sideTree'
import {DropdownButton, MenuItem} from 'react-bootstrap'
// useStrict(true)

const store = new AppStore()
store.load(22)

const mount = document.getElementById('root')  // mountpoint

ReactDOM.render((
  <div style={{width: '100%'}}>
    <Menu store={store} />
    <div className='row'>
      <div className='col-xs-2'>
        <DropdownButton bsStyle='primary' title={'novy'} id='addDd'>
          <MenuItem eventKey='1'>Slozka</MenuItem>
          <MenuItem eventKey='2'>Nahrat soubor</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4'>Textovy dokument</MenuItem>
        </DropdownButton>
        <SideTree store={store.sideTree} />
      </div>
      <div className='col-xs-10'>
        <ContentView store={store} />
      </div>
    </div>
  </div>
), mount)
