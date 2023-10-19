import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BasicDrawerNavigation, DrawerNavigation, StackNavigation } from './src/navigation'
import { AuthProvider } from './src/context/AuthContext'

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* <StackNavigation /> */}
        {/* <BasicDrawerNavigation /> */}
        <DrawerNavigation />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App