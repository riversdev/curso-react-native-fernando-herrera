import React from 'react'
import { SafeAreaView } from 'react-native'
import { HelloWorldScreen } from './src/screens/HelloWorldScreen'
import { CounterScreen } from './src/screens/CounterScreen'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { DimensionsScreen } from './src/screens/DimensionsScreen'
import { PositionScreen } from './src/screens/PositionScreen'
import { FlexScreen } from './src/screens/FlexScreen'
import {
  Homework10Screen,
  Homework1Screen,
  Homework2Screen,
  Homework3Screen,
  Homework4Screen,
  Homework5Screen,
  Homework6Screen,
  Homework7Screen,
  Homework8Screen,
  Homework9Screen
} from './src/screens/homework'

export const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#28425B' }}>
        {/* <HelloWorldScreen /> */}
        {/* <CounterScreen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionsScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}

        {/* <Homework1Screen /> */}
        {/* <Homework2Screen /> */}
        {/* <Homework3Screen /> */}
        {/* <Homework4Screen /> */}
        {/* <Homework5Screen /> */}
        {/* <Homework6Screen /> */}
        {/* <Homework7Screen /> */}
        {/* <Homework8Screen /> */}
        <Homework9Screen />
        {/* <Homework10Screen /> */}
      </SafeAreaView>
    </>
  )
}