import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { ConsentSelectors } from '../Redux/ConsentRedux'

const Locale = {
  en: 'English',
  fr: 'France'
}

const ConsentsScreen = ({ consents }) => {
  const Headers = () => (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'red'
      }}>
      <Text style={{ flex: 0.6 }}>Details</Text>
      <Text style={{ flex: 0.4 }}>Consent Given</Text>
    </View>
  )

  const renderItem = (consent, index) => (
    <View
      key={index}
      style={{ paddingVertical: 10, borderWidth: 1, borderColor: 'grey' }}>
      <View style={{ flexDirection: 'column' }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000'
          }}>
          {consent.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'grey'
          }}>
          {Locale[consent.language]}
        </Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.consentText}>All Consents</Text>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'column'
        }}>
        <Headers />

        <ScrollView>{consents && consents.map(renderItem)}</ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20
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

const mapStateToProps = (state) => ({
  consents: ConsentSelectors.getConsents(state)
})

export default connect(mapStateToProps, null)(ConsentsScreen)
