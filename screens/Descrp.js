import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import {newUser} from '../helpers/NewUser'
import firebase from '../database/firebase';

const Descrp = (props) =>{
    const [descripcion, setDescripcion] = useState('');
    const handleChangeText = (value) => {
        setDescripcion(value)
    }

    const userId = firebase.userAuth.currentUser.uid;
    const profilePicture = firebase.userAuth.currentUser.photoURL;

    const addDescrp = () => {
        newUser.descripcion = descripcion;
        console.log(newUser);
        console.log(userId);
        const usuario = {
            name: newUser.namep,
            email: newUser.email,
            phone: newUser.phone,
            birthday: newUser.birthday,
            mode: newUser.mode,
            description: newUser.descripcion,
            carreer: newUser.carrera,
            profPicture: profilePicture,
            id: userId,
        }
        //INSERT INTO USUARIOS
        firebase.db.collection('usuarios')
            .doc(userId)
            .set(usuario)

        console.log('guardado en la bd')
            
    }

    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txttitl}>Por favor añade una breve descripcion acerca de usted</Text>
                </View>
                <View>
                <TextInput style={styles.txtinpt} placeholder="                                      "
                onChangeText = {(value) => handleChangeText(value)}/>
                </View>
            </View>
            <View>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Feed")}
                    onPressOut = {addDescrp}>
                        <Text style={styles.btntxt}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            <View>
             <Image style={styles.imghead2} source={require('../Images/I2.png')}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignContent: "center",
        alignItems: 'center',
        marginTop:100
    },
    txttitl:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:32,
        color:'black',
        marginTop:10,
        marginHorizontal: 10
    },
    txtinpt:{
        padding: 1,
        marginTop: 20,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        fontSize: 20,
        marginHorizontal: 50
    },
    imghead:{
        height: 50,
        width: 500,
    },
    imghead2:{
        height: 50,
        width: 500,
        marginTop: 350
    },
    btn:{
        marginTop:10,
        alignItems:'center',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        marginHorizontal:110
    }
})

export default Descrp