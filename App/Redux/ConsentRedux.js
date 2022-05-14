import i18n from 'i18n-js'
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

i18n.fallbacks = true

i18n.translations = {
  en: {
    consent:
      'You understand that by using the site or site services, you agree to be bound by this agreement. If you do not accept this agreement in its entirety, you must not access or use the site or the site services.\n\nDo you agree to this agreement?\nPlease respond by saying "Yes" or "No".'
  },
  fr: {
    consent: `Vous comprenez qu'en utilisant le site ou les services du site, vous acceptez d'être lié par cet accord. Si vous n'acceptez pas cet accord dans son intégralité, vous ne devez pas accéder ou utiliser le site ou les services du site.\n\nAcceptez-vous à cet accord ?\nVeuillez répondre en disant "Oui" ou "Non".`
  }
}

export const ConsentSelectors = {
  getConsentByLocale: (locale) => {
    i18n.locale = locale
    return i18n.t('consent')
  },
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
