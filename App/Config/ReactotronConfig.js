import AsyncStorage from '@react-native-community/async-storage'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import Immutable from 'seamless-immutable'
import Config from '../Config/DebugConfig'

const reactotron = Reactotron.configure({ name: 'Consent App' })
  .useReactNative()
  .use(reduxPlugin({ onRestore: Immutable }))
  .use(sagaPlugin())
  .setAsyncStorageHandler(AsyncStorage)

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!

  reactotron.connect()

  // Let's clear Reactotron on every time we load the app
  reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
}
export default reactotron
console.tron = reactotron
