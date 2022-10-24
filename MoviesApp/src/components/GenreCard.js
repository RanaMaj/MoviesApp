import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const { height, width } = Dimensions.get("screen")

const setWidth = (w) => (width / 100) * w;


const GenreCard = ({ generName, active, onPress }) => {
    return (
        <TouchableOpacity style={{
            ...styles.container,
            backgroundColor: active ? Colors.ACTIVE : Colors.WHITE,
        }}
            activeOpacity={0.5}
            onPress={() => onPress(generName)}
        >
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