import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import Colors from '../constants/Colors'
import GenreCard from '../components/GenreCard'
import ItemSeparator from '../components/ItemSeparator'
import MovieCard from '../components/MovieCard'
import { getNowPlayingMovies } from '../services/MoviesServices'
import { AppContext } from '../context/AppContext'


const Genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"]

const HomeScreen = () => {

    const [activeGenre, setActiveGenre] = useState("All")
    const { movieShared, handelLiked } = useContext(AppContext)
    // const [nowPlayingMovies, setNowPlayingMovies] = useState({})

    // useEffect(() => {
    //     getNowPlayingMovies().then(movieResponse => setNowPlayingMovies(movieResponse.data))
    // }, [])
    const renderItem = ({ item }) => {
        return (
            <MovieCard item={item} />
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar styles="auto" translucent={false} backgroundColor={Colors.BASIC_BACKGROUND} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>New Playing</Text>
                <Text style={styles.headerSubTitle}>View All</Text>
            </View>
            <View style={styles.genreListContainer}>
                <FlatList
                    data={Genres}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item}
                    ListHeaderComponent={() => <ItemSeparator width={20} />}
                    ListFooterComponent={() => <ItemSeparator width={20} />}
                    ItemSeparatorComponent={<ItemSeparator width={20} />}
                    renderItem={({ item }) => (
                        <GenreCard generName={item} active={item === activeGenre ? true : false}
                            onPress={setActiveGenre}
                        />
                    )}
                />
            </View>
            <View>
                <FlatList
                    data={movieShared}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={() => <ItemSeparator width={20} />}
                    ListFooterComponent={() => <ItemSeparator width={20} />}
                    ItemSeparatorComponent={<ItemSeparator width={20} />}
                    renderItem={renderItem}
                />
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BASIC_BACKGROUND,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    headerTitle: {
        fontSize: 28,
    },
    headerSubTitle: {
        fontSize: 13,
        color: Colors.ACTIVE
    },
    genreListContainer: {
        paddingVertical: 10,
    }
})