import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import firebase from '../database/firebase';

export default function Conecta2({route}) {
    const {cardId, cardName, cardPhoto, cardCarreer, cardDesc, cardMode} = route.params;

    return (
        <View style = {styles.container}>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            <View>
                <Image style={styles.profileImage} source = {cardPhoto}/>
            </View>
            <View>
                <Text style= {styles.userName}>{cardName}</Text>
            </View>
            <View>
                <Text style = {styles.informationText}>{cardCarreer}</Text>
            </View>
            <View>
                <Text>{cardMode}</Text>
            </View>

            <View style = {styles.informationContainer}>
                <Text style = {styles.informationText}>Sobre mi</Text>
                <View>
                    <Text>{cardDesc}</Text>
                 
                </View>
                <Text style = {styles.informationText}>Mis Proyectos</Text>
                

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex:1,
        alignItems: 'center'
    
    },

    imghead: {
        width: '100%',
        height: 50,
        marginBottom: 10

    },

    profileImage: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },

    userName: {
        marginTop: 10,
        fontSize: 35,
        fontWeight: 'bold',
    },
    informationText: {
        marginTop: 5,
        fontSize: 20
    },

    picturesContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 80,
        flexDirection: 'row',
        

    },

    userImages: {
        width:70,
        height: 70,
        borderRadius: 100,
        margin:3
    },

    photoBtn: {
        width:70,
        height: 70,
        borderRadius: 100,
        borderColor: 'black',
        display: 'flex',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    informationContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    txtInput: {
        height: 40,
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        
    }
})

