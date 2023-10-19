import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import currencyFormatter from 'currency-formatter'
import { Credits, FullMovie } from '../interfaces'
import { CastItem } from './CastItem'
import { useWindowDimensions } from 'react-native'

interface Props {
    fullMovie: FullMovie
    credits: Credits
}

export const MovieDetails = ({ fullMovie, credits }: Props) => {
    const { width: windowWidth } = useWindowDimensions()

    return (
        <>
            <View style={{ marginBottom: 20 }}>
                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                    <View style={styles.row}>
                        <Icon name="star-outline" color="grey" size={16} style={styles.sectionText} />
                        <Text style={styles.sectionText}>  {fullMovie.vote_average}</Text>
                    </View>
                    <Text style={styles.sectionText}>{fullMovie.genres.map(x => x.name).join(', ')}</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Historia</Text>
                <Text style={styles.sectionText}>{fullMovie.overview}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Presupuesto</Text>
                <Text style={styles.sectionText}>{currencyFormatter.format(fullMovie.budget, { code: 'USD' })}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Actores</Text>
                <FlatList
                    data={credits.cast}
                    keyExtractor={({ id }) => String(id)}
                    renderItem={({ item }) => (<CastItem actor={item} />)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ width: windowWidth, left: -20 }}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black',
    },
    sectionText: {
        fontSize: 16,
        color: 'black',
    },
})