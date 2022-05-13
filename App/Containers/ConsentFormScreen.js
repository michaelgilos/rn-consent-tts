import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

const ConsentsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.consentText}>Consent Form</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40
  },
  consentText: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  labelText: {
    fontSize: 14
  },
  inputText: {
    borderColor: '#000',
    borderWidth: 1
  }
})

export default connect(null, null)(ConsentsScreen)
