import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default connect(null, null)(HomeScreen)
