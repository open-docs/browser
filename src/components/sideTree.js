import React from 'react'
import {observer} from 'mobx-react'

const SideTree = ({store}) => {
  //
  const TreeNode = observer(({node}) => (
    <ul className='list-group list-group-flush'>
      {
        node.children.map((i, idx) => (
          <li key={idx} className='list-group-item'>
            <i className={`fas ${i.toggled ? 'fa-folder-open' : 'fa-folder'}`} />
            &nbsp;
            <a href='javascript:void(0)' onClick={() => store.onToggle(i)}>
              {i.name} {i.loading ? 'loading' : ''}
            </a>
            {
              i.children.length > 0 && <TreeNode node={i} />
            }
          </li>
        ))
      }
    </ul>
  ))

  return store.tree.loading ? <span>loading</span> : <TreeNode node={store.tree} />
}

export default observer(SideTree)
