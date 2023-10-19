import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './src/navigation/Navigation'
import { GradientProvider } from './src/context/GradientContext'
// import { FadeScreen } from './src/screens'

const App = () => {
  return (
    <NavigationContainer>
      <GradientProvider>
        <Navigation />
        {/* <FadeScreen /> */}
      </GradientProvider>
    </NavigationContainer>
  )
}

export default App