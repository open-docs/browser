import React from 'react'
import ReactDOM from 'react-dom'
import AppStore from './stores/main'
import ContentView from './components/contentView'
import Menu from './components/menu'
import SideTree from './components/sideTree'
// useStrict(true)

const store = new AppStore()
store.load(22)

const mount = document.getElementById('root')  // mountpoint

ReactDOM.render((
  <div style={{width: '100%'}}>
    <Menu store={store} />
    <div className='row'>
      <div className='col-3'>
        <SideTree store={store.sideTree} />
      </div>
      <div className='col-9'>
        <ContentView store={store} />
      </div>
    </div>
  </div>
), mount)
