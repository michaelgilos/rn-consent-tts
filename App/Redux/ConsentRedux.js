import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveUserConsent: ['username', 'language', 'consent']
})

export const ConsentTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  consents: []
})

/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

export const saveUserConsent = (state, { username, language, consent }) =>
  state.merge(
    { username, language, consent },
    { merger: Mergers.concatArrayMerger }
  )

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_USER_CONSENT]: saveUserConsent
})
