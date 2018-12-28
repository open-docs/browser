import React from 'react'
import {observer} from 'mobx-react'

const PathView = ({store}) => {
  return store.path.length === 0 ? null : (
    <ul className='list-inline'>
      <li key='home'><a href='javascript:void(0)' onClick={() => store.onHomeClick(null)}>
        <i className='fas fa-home' />
      </a></li>
      {
        store.path.map((i, idx) => [
          <li key={idx}><i className='fas fa-arrow-right' /></li>,
          <li key={idx + 'nm'}>{i.name}</li>
        ])
      }
    </ul>
  )
}

export default observer(PathView)
