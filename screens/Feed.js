import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import firebase from '../database/firebase';
import WelcomeCard from '../components/WelcomeCard';
import ConectaCard from '../components/ConectaCard';
import MensajeCard from '../components/MensajeCard';

export default function MyProfile(props) {
 

    return (
        <View style = {styles.container}>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
                <WelcomeCard/>
                <ConectaCard/>
                <MensajeCard/>
            
                <View style={{flexDirection:'row', alignSelf:'center'}}>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("MyProfile")}>
                        <Image style={styles.imgpls} source={require('../Images/perfil.png')}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Conecta")}>
                        <Image style={styles.imgpls} source={require('../Images/plus.png')}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Msj")}>
                        <Image style={styles.imgpls} source={require('../Images/Huella.png')}/>
                    </TouchableOpacity>
                </View>
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
        
    },
    imgpls:{
        height:80,
        width:80,
        marginTop:15,
        marginRight:30,
        marginLeft:30
    },
})

