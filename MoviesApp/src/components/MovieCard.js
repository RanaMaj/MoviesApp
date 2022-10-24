import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedbackBase, View, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { AppContext } from '../context/AppContext'
import { useNavigation } from '@react-navigation/native'
import MoviesDetailes from '../screens/MoviesDetailes'

const Data = [
    {
        image: require('../../assets/images/2.png')
    },
    {
        image: require('../../assets/images/2.png')
    },
    {
        image: require('../../assets/images/3.png')
    },
    {
        image: require('../../assets/images/4.png')
    },
    {
        image: require('../../assets/images/5.png')
    },
    {
        image: require('../../assets/images/6.png')
    }
]

const MovieCard = (props) => {

    const [liked, setLiked] = useState(false)
    const { movieShared, handelLiked } = useContext(AppContext)
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity style={{ backgroundColor: 'red' }} key={props.item.id} >
            <TouchableOpacity
                style={styles.container}
                onPress={() => navigate('Movies', { item: props.item })}
            // onPress={() => setLiked(!liked)}
            >
                <Icon onPress={() => handelLiked(props.item.id)} name={props.item.like ? 'heart' : 'heart-outline'} color={props.item.like ? Colors.HEART : Colors.WHITE} style={{ position: "absolute", bottom: 10, left: 10 }} />
            </TouchableOpacity>
            <View>
                <Image style={{ width: 230, height: 340, zIndex: 123, position: 'absolute' }}>{Data.image}</Image>
                <Text style={styles.movieTitle} numberOfLines={3}> {props.item.title}</Text>
                <View style={styles.movieSubTitleContainer}>
                    <Text style={styles.movieSubTitle}>Mindi | (U/A)</Text>
                    <View style={styles.rowAndCenter}>
                        <Icon name='heart' size={17} color={Colors.HEART} style={{ marginRight: 5 }} />
                        <Text style={styles.movieSubTitle}>90%</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default MovieCard


const styles = StyleSheet.create({
    container: {
        // backgroundColor: Colors.ACTIVE,
        height: 340,
        width: 230,
        borderRadius: 5,
        elevation: 5,
        marginVertical: 2,
    },
    movieTitle: {
        color: Colors.GRAY,
        paddingVertical: 2,
        marginTop: 5,
        width: 230,
        color: 'pink'
    },
    movieSubTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    movieSubTitle: {
        fontSize: 12,
    },
    rowAndCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})