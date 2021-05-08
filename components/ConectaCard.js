import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ConectaCard() {
    return (
        <View style = {styles.cardContainer}>
            <Text>¡Nueva Coneccion!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        borderWidth: 2,
        borderColor: 'black',
        width: '100%',
        height:60,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center'

    }
})
