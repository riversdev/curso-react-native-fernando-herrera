import { createStackNavigator } from '@react-navigation/stack'
import { DetailScreen, HomeScreen } from '../screens'
import { Movie } from '../interfaces'

export type RootStackParams = {
    HomeScreen: undefined,
    DetailScreen: { movie: Movie },
}

const Stack = createStackNavigator<RootStackParams>()

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    )
}