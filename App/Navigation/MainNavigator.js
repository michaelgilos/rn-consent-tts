import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ConsentFormScreen from '../Containers/ConsentFormScreen'
import ConsentsScreen from '../Containers/ConsentsScreen'
import HomeScreen from '../Containers/HomeScreen'
import Colors from '../Themes/Colors'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        // backgroundColor: Colors.background,
        borderTopWidth: 1
      },
      tabBarLabelStyle: {
        fontSize: 20,
        textAlignVertical: 'center',
        alignContent: 'center'
      },
      tabBarLabelPosition: 'beside-icon',
      tabBarIconStyle: { display: 'none' },
      headerTintColor: '#fff',
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: 'gray'
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Consents" component={ConsentsScreen} />
  </Tab.Navigator>
)

const MainNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeTab">
      <Stack.Screen name="HomeTab" component={TabNavigator} />
      <Stack.Screen name="Consent" component={ConsentFormScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator
