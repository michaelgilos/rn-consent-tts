import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Mergers from 'seamless-immutable-mergers'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveUserConsent: ['name', 'language', 'response']
})

export const ConsentTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  consents: []
})

/* ------------- Selectors ------------- */

export const ConsentSelectors = {
  getConsents: (state) => state.consent.consents
}

/* ------------- Reducers ------------- */

export const saveUserConsent = (state, { name, language, response }) =>
  state.merge(
    { consents: [{ name, language, response }] },
    {
      merger: Mergers.concatArrayMerger
    }
  )

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_USER_CONSENT]: saveUserConsent
})
