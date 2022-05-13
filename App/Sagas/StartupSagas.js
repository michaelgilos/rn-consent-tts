import { takeLatest } from 'redux-saga/effects'
import { StartupTypes } from '../Redux/StartupRedux'

export function* startup(action) {}

export default function () {
  return [takeLatest(StartupTypes.STARTUP, startup)]
}
