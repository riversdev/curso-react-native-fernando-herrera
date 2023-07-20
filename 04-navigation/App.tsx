import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BasicDrawerNavigation, DrawerNavigation, StackNavigation } from './src/navigation'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <BasicDrawerNavigation /> */}
      <DrawerNavigation />
    </NavigationContainer>
  )
}

export default App