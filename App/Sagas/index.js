import { all } from 'redux-saga/effects'
import DebugConfig from '../Config/DebugConfig'
import API from '../Services/Api'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([...require('./StartupSagas').default()])
}
