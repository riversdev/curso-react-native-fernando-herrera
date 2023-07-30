import ImageColors from 'react-native-image-colors'

interface GetImageColorsProps {
    primary: string
    secondary: string
}

export const getImageColors = async (url: string): Promise<GetImageColorsProps> => {
    const colors = await ImageColors.getColors(url, {
        fallback: '#228B22',
        cache: true,
        key: url
    })

    let primary = 'transparent'
    let secondary = 'transparent'

    if (colors.platform === 'android') {
        primary = colors.dominant || 'transparent'
        secondary = colors.average || 'transparent'
    } else if (colors.platform === 'ios') {
        primary = colors.primary || 'transparent'
        secondary = colors.secondary || 'transparent'
    }

    return { primary, secondary }
}