import {observable, action, computed} from 'mobx'
import {MODAL_NAMES} from '../consts'
import SideTreeStore from './sideTree'
import APIService from './apiService'
import AddDocStore from './addDoc'
// import SubtsEditStore from './substsEdit'
// import PermsEditStore from './permsEdit'

const modalMapping = {
  [MODAL_NAMES.ADD_DOC]: AddDocStore
  // [MODAL_NAMES.PERMS]: PermsEditStore,
  // [MODAL_NAMES.SUBSTS]: SubtsEditStore
}

export default class StateStore {

  constructor () {
    this.api = new APIService()
    this.sideTree = new SideTreeStore(this)
  }

  load (id) {
    this.sideTree.load()
    this.api.get('/docs/list/')
    .then(this.onLoaded.bind(this))
    .catch(err => console.log(err))
  }

  @observable menuDown = false

  @observable activeModal = null
  @action closeModal () {
    this.activeModal = null
    delete this.modalStore
  }
  @action showModal (name, params) {
    this.activeModal = name
    this.modalStore = new modalMapping[name](this, params)
  }

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
