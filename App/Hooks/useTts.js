import Tts from 'react-native-tts'

const speak = ({ text, locale, onComplete }) => {
  Tts.setDefaultLanguage(locale)

  Tts.addEventListener('tts-finish', (event) => onComplete())

  Tts.getInitStatus()
    .then(() => {
      Tts.speak(text)
    })
    .catch((err) => {
      if (err.code === 'no_engine') {
        Tts.requestInstallEngine()
      }
    })
}

const stop = () => {
  Tts.stop()
  Tts.removeAllListeners('tts-finish')
}

const useTts = () => [speak, stop]

export default useTts
