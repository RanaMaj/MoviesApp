import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MovieCard from '../components/MovieCard'
const MoviesDetailes = (props) => {
    const { item } = props.route.params
    return (
        <View style={styles.container}>

            <TouchableOpacity >
                <MovieCard item={item} />
            </TouchableOpacity>

        </View>
    )
}

export default MoviesDetailes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightpink'
    }
})