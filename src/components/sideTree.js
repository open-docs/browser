import React from 'react'
import {observer} from 'mobx-react'

const SideTree = ({store}) => {
  return store.tree.loading ? <span>loading</span> : (
    <ul className='list-group list-group-flush'>
      {
        store.tree.children.map((i, idx) => (
          <li key={idx} className='list-group-item'><i className='fas fa-folder' /> {i.name}</li>
        ))
      }
    </ul>
  )
}

export default observer(SideTree)
