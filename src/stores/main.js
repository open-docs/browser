import {observable, action, computed} from 'mobx'
import {MODAL_NAMES, DOC_TYPES} from '../consts'
import SideTreeStore from './sideTree'
import APIService from './apiService'
import AddDocStore from './addDoc'
import LoginStore from './login'
// import SubtsEditStore from './substsEdit'
// import PermsEditStore from './permsEdit'

const modalMapping = {
  [MODAL_NAMES.ADD_DOC]: AddDocStore,
  [MODAL_NAMES.LOGIN]: LoginStore
  // [MODAL_NAMES.PERMS]: PermsEditStore,
  // [MODAL_NAMES.SUBSTS]: SubtsEditStore
}

export default class StateStore {

  constructor () {
    this.api = new APIService(this.on401.bind(this))
    this.sideTree = new SideTreeStore(this)
    this.loginPromises = []
  }

  on401 (err) {
    this.activeModal !== MODAL_NAMES.LOGIN && this.showModal(MODAL_NAMES.LOGIN)
    return new Promise((resolve, reject) => {
      this.loginPromises.push(resolve)
    })
  }

  onLoggedIn () {
    this.loginPromises.map(resolve => resolve())
    this.loginPromises = []
    this.closeModal()
  }

  load (id) {
    this.sideTree.load()
    this.loadFolderContent(null)
  }

  loadFolderContent (folderId) {
    const id = folderId || ''
    window.history.replaceState(id, id, id)
    this.api.get(`/docs/list/${id}`)
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
    this.data = data || []
  }

  @action onChange (name, text) {
    this.doc[name] = text
  }

  @action onArrayChange (idx, val) {
    this.doc.substitutions[idx] = val
  }

  @observable path = []
  @computed get currParent () {
    return this.path.length === 0 ? null : this.path[this.path.length - 1].id
  }

  @action onFolderClick (folder) {
    this.path.push(folder)
    this.loadFolderContent(folder.id)
  }

  @action onHomeClick () {
    this.path.clear()
    this.loadFolderContent(null)
  }

  @action onDetailClick (doc) {
    switch (doc.typ) {
      case DOC_TYPES.FOLDER: return this.onFolderClick(doc)
      case DOC_TYPES.TEXT: return window.open(`${Conf.textEditUrl}/${doc.id}`)
    }
  }
}
