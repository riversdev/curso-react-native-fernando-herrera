import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props {
    title: string
    color?: '#9B9B9B' | '#2D2D2D' | '#FF9427'
    size?: 1 | 2
    onPress?: () => void
}

export const ButtonCalc = ({ title, color = '#2D2D2D', size = 1, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.button, { backgroundColor: color, width: size === 1 ? 80 : 170 }]}>
                <Text style={[styles.buttonText, { color: color === '#9B9B9B' ? 'black' : 'white' }]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}