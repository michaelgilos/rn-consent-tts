import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import useTts from '../Hooks/useTts'
import ConsentActions, { ConsentSelectors } from '../Redux/ConsentRedux'
import Images from '../Themes/Images'

const ConsentsScreen = ({ saveConsent, route, consentByLocale }) => {
  const { name, language } = route.params
  const consent = consentByLocale(language)
  const [ttsCompleted, setTtsCompleted] = useState(false)
  const [speakTts, stopTts] = useTts()

  const playConsent = () => {
    speakTts({
      text: consent,
      locale: language,
      onComplete: () => setTtsCompleted(true)
    })
  }

  useEffect(() => {
    playConsent()

    return stopTts
  }, [])

  const onRetry = () => {
    playConsent()
    setTtsCompleted(false)
  }

  const onSave = () => {
    saveConsent({ name, language, response: 'yes' })
  }

  const ActionButtons = () =>
    ttsCompleted && (
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
    )

  const RecordButton = () => (
    <TouchableOpacity
      style={[
        styles.microphone,
        { backgroundColor: ttsCompleted ? 'green' : 'grey' }
      ]}
      disabled={!ttsCompleted}>
      <Image
        style={{
          width: 48,
          height: 48,
          alignSelf: 'center'
        }}
        source={Images.microphone}
      />
    </TouchableOpacity>
  )

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Consent Form</Text>
        <Text style={styles.consentText}>{consent}</Text>

        <RecordButton />
        <ActionButtons />
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

const mapStateToProps = (state) => ({
  consentByLocale: (locale) => ConsentSelectors.getConsentByLocale(locale)
})

const mapDispatchToProps = (dispatch) => ({
  saveConsent: ({ name, language, response }) =>
    dispatch(ConsentActions.saveUserConsent(name, language, response))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConsentsScreen)
