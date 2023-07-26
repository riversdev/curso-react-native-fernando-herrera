import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { RootStackParams } from '../navigation/Navigation'
import { MovieDetails } from '../components'
import { useMovieDetails } from '../hooks'

const { height: screenHeight } = Dimensions.get('window')

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route }: Props) => {
    const { movie } = route.params
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const { isLoading, details } = useMovieDetails(movie.id)
    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    return (
        <ScrollView>
            <View style={styles.posterContainer}>
                <View style={styles.posterShadow}>
                    <Image
                        source={{ uri }}
                        style={styles.poster}
                    />
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.subtitle}>{movie.title}</Text>
                <Text style={styles.title}>{movie.original_title}</Text>
            </View>
            <View style={[styles.infoContainer, { marginTop: -25, paddingBottom: 0 }]}>
                {
                    isLoading
                        ? (<ActivityIndicator size={35} color="grey" />)
                        : (<MovieDetails fullMovie={details.fullMovie!} credits={details.credits!} />)
                }
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
                style={styles.backButton}
            >
                <Icon name="arrow-back-outline" color="white" size={60} />
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    posterContainer: {
        width: '100%',
        height: screenHeight * 0.7,
    },
    posterShadow: {
        flex: 1,
        overflow: 'hidden',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    poster: {
        flex: 1,
    },
    infoContainer: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    subtitle: {
        fontSize: 16,
        color: 'black',
        opacity: 0.5,
    },
    backButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 999,
        elevation: 9,
    },
})