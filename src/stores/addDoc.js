import {observable, action, computed} from 'mobx'

export default class AddDocStore {

  constructor (store) {
    this.store = store
  }

  title = 'Novy dokument'

  @observable val = false
  @observable error = false

  @action save () {
    const data = {
      name: this.val,
      perms: 'eee'
    }
    this.store.api.post('/docs/', data)
    .then(this.onSaved.bind(this, data))
    .catch(this.onError.bind(this))
  }

  @action onSaved (data) {
    this.store.closeModal()
    this.store.sideTree.tree.children.push(data)
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
