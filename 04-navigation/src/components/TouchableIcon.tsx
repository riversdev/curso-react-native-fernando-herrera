import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'
import { colors } from '../theme/appTheme'

interface Props {
    iconName: string
    iconSize?: number
    iconColor?: string
}

export const TouchableIcon = ({ iconName, iconSize = 80, iconColor = colors.primary }: Props) => {
    const { changeFavoriteIcon } = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={() => changeFavoriteIcon(iconName)}
        >
            <Icon name={iconName} size={iconSize} color={iconColor} />
        </TouchableOpacity>
    )
}