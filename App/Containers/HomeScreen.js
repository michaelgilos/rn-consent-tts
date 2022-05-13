import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { connect } from 'react-redux'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.consentText}>Consent Form</Text>

      <Text style={[styles.labelText, { marginTop: 20 }]}>Name</Text>
      <TextInput
        style={[styles.inputText, { marginTop: 10 }]}
        placeholder="Enter your name"
      />

      <Text style={[styles.labelText, { marginTop: 20 }]}>Language</Text>
      <DropDownPicker
        items={[
          { label: 'English', value: 'en' },
          { label: 'France', value: 'fr' }
        ]}
        defaultNull
        placeholder="Select Language"
        containerStyle={{ marginTop: 10 }}
        onChangeItem={(item) => console.log(item.label, item.value)}
      />

      <TouchableOpacity
        style={{
          marginTop: 10,
          borderColor: '#000',
          borderWidth: 1,
          padding: 10,
          alignSelf: 'flex-end'
        }}>
        <Text>Next</Text>
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

export default connect(null, null)(HomeScreen)
