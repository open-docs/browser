import {observable, action, computed} from 'mobx'
import {MODAL_NAMES} from '../consts'
import APIService from './apiService'

export default class SideTreeStore {

  constructor (store) {
    this.store = store
  }

  load (id) {
    this.store.api.get(`/docs/list/${id || ''}`)
    .then(this.onLoaded.bind(this))
    .catch(err => console.log(err))
  }

  @observable tree = {
    loading: true,
    children: [],
    id: null
  }

  @action onToggle (node) {
    if (this.cursor) {  // close old branch
      this.cursor.children = []
      this.cursor.toggled = false
    }
    this.cursor = node
    node.toggled = !node.toggled
    this.load(node.id)
  }

  @action onFolderAdd (data) {
    this.sideTree.tree.children.push(data)
  }

  @action onLoaded (data) {
    const cursor = this.cursor || this.tree
    cursor.loading = false
    data.map(i => {
      i.toggled = false
      i.children = []
    })
    cursor.children = data
  }

}
