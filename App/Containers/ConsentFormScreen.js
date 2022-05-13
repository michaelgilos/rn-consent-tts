import i18n from 'i18n-js'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Tts from 'react-native-tts'
import { connect } from 'react-redux'
import ConsentActions from '../Redux/ConsentRedux'
import Images from '../Themes/Images'

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

// i18n.locale = 'fr'

const ConsentsScreen = ({ saveConsent, route }) => {
  const { name, language } = route.params

  i18n.locale = language

  const [ttsCompleted, setTtsCompleted] = useState(false)

  const playConsent = () => {
    Tts.getInitStatus()
      .then(() => {
        Tts.speak(i18n.t('consent'))
      })
      .catch((err) => {
        if (err.code === 'no_engine') {
          Tts.requestInstallEngine()
        }
      })
  }

  useEffect(() => {
    Tts.setDefaultLanguage(language)

    Tts.engines().then((engines) => console.tron.log({ engines }))

    Tts.addEventListener('tts-finish', (event) => {
      setTtsCompleted(true)
      console.tron.log('finish', event)
    })

    playConsent()

    return () => {
      Tts.stop()
      Tts.removeAllListeners('tts-finish')
    }
  }, [language])

  const onRetry = () => {
    playConsent()
    setTtsCompleted(false)
  }

  const onSave = () => {
    saveConsent({ name, language, response: 'yes' })
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Consent Form</Text>
        <Text style={styles.consentText}>{i18n.t('consent')}</Text>

        <TouchableOpacity style={styles.microphone} disabled={!ttsCompleted}>
          <Image
            style={{
              width: 48,
              height: 48,
              alignSelf: 'center'
            }}
            source={Images.microphone}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          disabled={!ttsCompleted}
          style={styles.button}
          onPress={onRetry}>
          <Text>Retry</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!ttsCompleted}
          style={styles.button}
          onPress={onSave}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  consentText: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'justify'
  },
  microphone: {
    justifyContent: 'center',
    marginTop: 40,
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: 'grey'
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around'
  },
  button: {
    borderColor: 'grey',
    borderWidth: 1,
    flex: 0.5,
    padding: 20,
    alignItems: 'center'
  }
})

const mapDispatchToProps = (dispatch) => ({
  saveConsent: ({ name, language, response }) =>
    dispatch(ConsentActions.saveUserConsent(name, language, response))
})

export default connect(null, mapDispatchToProps)(ConsentsScreen)
