import React, { useState } from 'react'
import { View, Switch, Platform, Text, StyleSheet } from 'react-native'

interface Props {
    title?: string
    isOn: boolean
    onChange?: (value: boolean) => void
}

export const CustomSwitch = ({ title = '', isOn, onChange = () => { } }: Props) => {
    const [isEnabled, setIsEnabled] = useState(isOn)
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange(!isEnabled)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Switch
                trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
                thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
    },
})