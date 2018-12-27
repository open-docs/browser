import {observable, action, computed} from 'mobx'
import {MODAL_NAMES} from '../consts'
import SideTreeStore from './sideTree'
import APIService from './apiService'
// import TitleEditStore from './titleEdit'
// import SubtsEditStore from './substsEdit'
// import PermsEditStore from './permsEdit'
//
// const modalMapping = {
//   [MODAL_NAMES.TITLE]: TitleEditStore,
//   [MODAL_NAMES.PERMS]: PermsEditStore,
//   [MODAL_NAMES.SUBSTS]: SubtsEditStore
// }

export default class StateStore {

  constructor () {
    this.api = new APIService()
    this.sideTree = new SideTreeStore(this)
  }

  load (id) {
    this.sideTree.load()
    const data = [
      {name: 'file 1', id: 13, owner: 'gandalf', lastModified: '1.2.2018'},
      {name: 'file 2', id: 39, owner: 'gandalf', lastModified: '1.2.2018'},
      {name: 'file 22', id: 334, owner: 'gandalf', lastModified: '1.2.2018'}
    ]
    setTimeout(this.onLoaded.bind(this, data), 2000)
  }

  @observable menuDown = false

  // @observable activeModal = null
  // @action closeModal () {
  //   this.activeModal = null
  //   delete this.modalStore
  // }
  // @action showModal (name) {
  //   this.activeModal = name
  //   this.modalStore = new modalMapping[name](this)
  // }

  @observable data = []
  @observable loading = true

  @action onLoaded (data) {
    this.loading = false
    this.data = data
  }

  @action onChange (name, text) {
    this.doc[name] = text
  }

  @action onArrayChange (idx, val) {
    this.doc.substitutions[idx] = val
  }

}
