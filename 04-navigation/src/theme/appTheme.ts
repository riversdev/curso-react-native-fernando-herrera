import { StyleSheet } from 'react-native'

export const colors = {
    primary: '#5856D6',
    secondary: '',
    success: '',
    danger: '',
    warning: '',
    info: '',
    light: '',
    dark: '',
}

export const appTheme = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        color: 'black',
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWhite: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatarContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 100,
    },
    menuContainer: {
        paddingHorizontal: 15,
        gap: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    menuTextItem: {
        fontSize: 20,
        color: 'black',
    },
})