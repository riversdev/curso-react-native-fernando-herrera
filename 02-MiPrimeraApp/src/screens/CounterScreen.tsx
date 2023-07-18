import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fab } from '../components/Fab'

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Counter: {counter}
      </Text>
      <Fab
        title='-1'
        position='bottom-left'
        onPress={() => setCounter(counter - 1)}
      />
      <Fab
        title='+1'
        onPress={() => setCounter(counter + 1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    top: -15,
  },
})