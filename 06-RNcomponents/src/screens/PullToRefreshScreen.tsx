import React, { useState } from 'react'
import { View, Text, ScrollView, RefreshControl, Button } from 'react-native'
import { appTheme } from '../theme/appTheme'
import { HeaderTitle } from '../components'

export const PullToRefreshScreen = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [data, setdata] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            setRefreshing(false)
            setdata('Hello world')
        }, 3000)
    }

    return (
        <ScrollView
            refreshControl={(
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressBackgroundColor="#5856D6" // android
                    colors={['blue', 'red', 'orange']} // android
                    style={{ backgroundColor: 'red' }} // ios
                />
            )}
        >
            <View style={appTheme.container}>
                <HeaderTitle title="Pull to refresh" />
                {data && (<Text>{data}</Text>)}
            </View>
        </ScrollView>
    )
}