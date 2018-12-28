import {observable, action, computed} from 'mobx'
import {DOC_TYPES} from '../consts'

export default class AddDocStore {

  constructor (store, params) {
    this.store = store
    this.params = params
  }

  titles = {
    [DOC_TYPES.FOLDER]: 'Nova slozka',
    [DOC_TYPES.TEXT]: 'Nova dokument'
  }

  @computed get title () {
    return this.titles[this.params.typ]
  }

  @observable val = ''
  @observable error = 'nesmi byt'

  @action save () {
    const data = {
      name: this.val,
      typ: this.params.typ,
      perms: 'eee'
    }
    this.store.api.post('/docs/', data)
    .then(this.onSaved.bind(this, data))
    .catch(this.onError.bind(this))
  }

  @action onSaved (data) {
    this.store.closeModal()
    if (this.params.typ === DOC_TYPES.FOLDER) {
      this.store.sideTree.tree.children.push(data)
    }
    this.store.data.push(data)
  }

  @action onError (err) {
    this.error = err
  }

  @action onChange (text) {
    this.val = text
    if (!this.val || this.val.length === 0) {
      this.error = 'toto pole nesmi byt prazdne'
    } else {
      this.error = false
    }
  }

}
