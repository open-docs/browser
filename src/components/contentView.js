import React from 'react'
import {observer} from 'mobx-react'
// import ModalEditor from './modals'

const TextView = observer(({store}) => {
  return store.loading ? (<h4>načítám</h4>) : (
    <table className='table table-sm'>
      <thead>
        <tr>
          <th scope='col'>Nazev</th>
          <th scope='col'>Majitel</th>
          <th scope='col'>Upraveno</th>
        </tr>
      </thead>
      <tbody>
        {
          store.data.map((i, idx) => (
            <tr key={idx}>
              <th scope='row'><i className='fas fa-folder' /> {i.name}</th>
              <td>{i.owner}</td>
              <td>{i.lastModified}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
})

export default TextView
