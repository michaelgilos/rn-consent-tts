import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Mergers from 'seamless-immutable-mergers'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveUserConsent: ['username', 'language', 'response']
})

export const ConsentTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  consents: []
})

/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

export const saveUserConsent = (state, { username, language, response }) =>
  state.merge(
    { consents: [{ username, language, response }] },
    {
      merger: Mergers.concatArrayMerger
    }
  )

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_USER_CONSENT]: saveUserConsent
})
