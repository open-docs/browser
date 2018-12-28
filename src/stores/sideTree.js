import {observable, action, computed} from 'mobx'
import {MODAL_NAMES} from '../consts'
import APIService from './apiService'

export default class SideTreeStore {

  constructor (store) {
    this.store = store
  }

  load (id) {
    this.store.api.get('/docs/list/')
    .then(this.onLoaded.bind(this))
    .catch(err => console.log(err))
  }

  @observable tree = {
    loading: true,
    children: []
  }
  @observable cursor = null

  @action onToggle (node, toggled) {
    if (this.cursor) {
      this.cursor.active = false;
    }
    node.active = true
    if (node.children) {
      node.toggled = toggled
    }
    this.cursor = node
  }

  @action onFolderAdd (data) {
    this.sideTree.tree.children.push(data)
  }

  @action onLoaded (data) {
    this.tree.loading = false
    this.tree.children = data
  }

}
