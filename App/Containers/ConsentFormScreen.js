import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import Images from '../Themes/Images'

const ConsentsScreen = ({ navigation }) => {
  const consent = `You understand that by using the site or site services, you agree to be bound by this agreement.If you do not accept this agreement in its entirety, you must not access or use the site or the site services.\n\nDo you agree to this agreement?\nPlease respond by saying "Yes" or "No".`

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Consent Form</Text>
      <Text style={styles.consentText}>{consent}</Text>

      <TouchableOpacity style={styles.microphone}>
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
  }
})

export default connect(null, null)(ConsentsScreen)
