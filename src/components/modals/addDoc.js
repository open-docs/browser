import {observer} from 'mobx-react'
import {FormControl, FormGroup, HelpBlock} from 'react-bootstrap'

const AddDocForm = observer(({store}) => (
  <FormGroup validationState={store.error === false ? 'success' : 'error'}>
    <FormControl type='text' value={store.val} placeholder='nazev'
      onChange={(evt) => store.onChange(evt.target.value)} />
    <FormControl.Feedback />
    {
      store.error === false ? null : <HelpBlock>{store.error}.</HelpBlock>
    }
  </FormGroup>
))

export default AddDocForm
