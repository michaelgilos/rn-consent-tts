import Voice from '@react-native-voice/voice'

const useSpeech = ({ onSpeechEnd, onSpeechResults, onSpeechError }) => {
  const start = async (locale) => {
    const services = await Voice.getSpeechRecognitionServices()
    console.tron.log('start', { services, available })

    const available = await Voice.isAvailable()
    if (!available) {
      onSpeechError('Speech is unavailable')
      return
    }

    try {
      await Voice.start(locale)
    } catch (e) {
      console.tron.error(e)
    }
  }

  const stop = () => {
    console.tron.log('stop')
    Voice.stop()
  }

  const destroy = () => {
    Voice.destroy().then(Voice.removeAllListeners)
  }

  console.tron.log('useSpeech')

  Voice.onSpeechStart = (event) => {
    console.tron.log('onSpeechStart', event)
  }
  Voice.onSpeechEnd = onSpeechEnd
  Voice.onSpeechResults = onSpeechResults
  Voice.onSpeechError = (event) => {
    console.tron.log('onSpeechError', event)
    onSpeechError(event.error.message)
  }
  Voice.onSpeechPartialResults = (event) => {
    console.tron.log('onSpeechPartialResults', event)
  }

  return [start, stop, destroy]
}

export default useSpeech
