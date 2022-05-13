import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../Containers/HomeScreen'
import Colors from '../Themes/Colors'

const Tab = createBottomTabNavigator()

function ConsentScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Consent Screen</Text>
    </View>
  )
}

const MainNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopWidth: 0
        },
        headerStyle: {
          backgroundColor: Colors.background,
          shadowColor: Colors.background
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'gray'
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Consent" component={ConsentScreen} />
    </Tab.Navigator>
  )
}

export default MainNavigator
