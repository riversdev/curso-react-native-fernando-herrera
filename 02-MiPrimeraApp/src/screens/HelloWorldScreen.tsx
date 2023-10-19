import { Text, View } from 'react-native'

export const HelloWorldScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text
                style={{
                    fontSize: 45,
                    color: 'white'
                }}
            >
                Hello World !
            </Text>
        </View>
    )
}