import { StyleSheet, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { act } from 'react-test-renderer';

const { height, width } = Dimensions.get("screen")

const setWidth = (w) => (width / 100) * w;


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

const GenreCard = ({ generName, active, onPress }) => {
    return (
        <TouchableOpacity style={{
            ...styles.container,
            backgroundColor: active ? Colors.ACTIVE : Colors.WHITE,
        }}
            activeOpacity={0.5}
            onPress={() => onPress(generName)}
        >
            {/* <Image style = {{height:}}>{Data.image}</Image> */}
            <Text style={{ ...styles.generText, color: active ? Colors.WHITE : Colors.BLACK }}>{generName}</Text>
        </TouchableOpacity >
    )
}

export default GenreCard

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: Colors.WHITE,
        paddingVertical: 8,
        elevation: 3,
        marginVertical: 2,
        width: setWidth(25),
    },
    generText: {
        fontSize: 13,
        color: Colors.ACTIVE
    },
})