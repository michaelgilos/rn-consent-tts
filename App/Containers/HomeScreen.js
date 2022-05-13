import React, { useEffect, useState } from 'react'
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
  const [name, setName] = useState('')
  const [language, setLanguage] = useState()
  const [open, setOpen] = useState(false)

  const onNext = () => navigation.navigate('Consent', { name, language })

  return (
    <View style={styles.container}>
      <Text style={styles.consentText}>Consent Form</Text>

      <Text style={[styles.labelText, { marginTop: 20 }]}>Name</Text>
      <TextInput
        style={[styles.inputText, { marginTop: 10 }]}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={[styles.labelText, { marginTop: 20 }]}>Language</Text>
      <DropDownPicker
        items={[
          { label: 'English', value: 'en' },
          { label: 'France', value: 'fr' }
        ]}
        defaultNull
        open={open}
        setOpen={setOpen}
        value={language}
        setValue={setLanguage}
        placeholder="Select Language"
        containerStyle={{ marginTop: 10 }}
      />

      <TouchableOpacity
        style={{
          marginTop: 10,
          borderColor: '#000',
          borderWidth: 1,
          padding: 10,
          alignSelf: 'flex-end'
        }}
        onPress={onNext}>
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
