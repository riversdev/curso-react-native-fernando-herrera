import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { CustomSwitch, HeaderTitle } from '../components'
import { appTheme } from '../theme/appTheme'

export const SwitchScreen = () => {
    const [state, setstate] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    })

    const onChange = (value: boolean, field: keyof typeof state) => setstate({ ...state, [field]: value })

    return (
        <View style={appTheme.container}>
            <HeaderTitle title="Switches" />
            <CustomSwitch title="Active" isOn={state.isActive} onChange={(value) => onChange(value, 'isActive')} />
            <CustomSwitch title="Hungry" isOn={state.isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            <CustomSwitch title="Happy" isOn={state.isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            <Text>{JSON.stringify(state, null, 4)}</Text>
        </View>
    )
}