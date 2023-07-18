import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end',
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 15,
    },
    smallResult: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    row: {
        flexDirection: 'row',
        height: 90,
        justifyContent: 'space-between',
    },
    button: {
        height: 80,
        minWidth: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
    },
})