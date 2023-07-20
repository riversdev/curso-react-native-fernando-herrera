import { StyleSheet } from 'react-native'

export const appTheme = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
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
        marginTop: 20,
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 100,
    },
    menuContainer: {
        padding: 20,
        gap: 10,
    },
    menuTextItem: {
        fontSize: 20,
    },
})