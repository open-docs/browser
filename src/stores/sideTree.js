import {observable, action, computed} from 'mobx'
import {MODAL_NAMES} from '../consts'
import APIService from './apiService'

export default class SideTreeStore {

  constructor (store) {
    this.store = store
  }

  load (id) {
    const data = [
      {name: 'folder 1', id: 11},
      {name: 'folder 2', id: 33},
      {name: 'folder 22', id: 332}
    ]
    setTimeout(this.onLoaded.bind(this, data), 2000)
  }

  @observable menuDown = false

  @observable tree = {
    loading: true,
    children: []
  }
  @observable cursor = null

  @action onToggle (node, toggled) {
    if(this.cursor){
      this.cursor.active = false;
    }
    node.active = true;
    if(node.children){ node.toggled = toggled; }
    this.cursor = node
  }

  @action onLoaded (data) {
    this.tree.loading = false
    this.tree.children = data
  }

}
