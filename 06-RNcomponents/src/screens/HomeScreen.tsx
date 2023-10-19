import React from 'react'
import { View, FlatList } from 'react-native'
import { FlatListMenuItem, HeaderTitle } from '../components'
import { appTheme } from '../theme/appTheme'
import { menuItems } from '../data'

export const HomeScreen = () => {
    const renderItemSeparator = () => (<View style={{ borderBottomWidth: 1, opacity: 0.3, marginVertical: 5 }} />)

    return (
        <View style={appTheme.container}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => (<FlatListMenuItem item={item} />)}
                keyExtractor={({ name }) => name}
                ListHeaderComponent={() => (<HeaderTitle title="Opciones de menu" />)}
                ItemSeparatorComponent={renderItemSeparator}
            />
        </View>
    )
}