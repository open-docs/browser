import React from 'react'
import {observer} from 'mobx-react'

const SideTree = ({store}) => {
  return (
    <ul className='list-group list-group-flush'>
      {
        store.tree.children.map((i, idx) => (
          <li key={idx} className='list-group-item'>{i.name}</li>
        ))
      }
    </ul>
  )
}

export default observer(SideTree)
