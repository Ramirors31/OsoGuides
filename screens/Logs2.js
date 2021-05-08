import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';
import {newUser} from '../helpers/NewUser';
import firebase from '../database/firebase';

const Logs2 = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [usaerData, setUserData] = useState({
        userEmail : '',
        userPassword: '',
    })
    function addEmail() {
        newUser.email = email;
        console.log(newUser);
    }

    const sumbit = () => {
        firebase.userAuth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('User Signed in')
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(errorMessage)
          });
          
        addEmail();
    }
    return(
        <ScrollView>
            <View style = {styles.container}>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
                    <Text style={styles.txttilt}>¿Cual es tu direccion de Correo?</Text>
                    <Text style={styles.txtinf}>Ingresa una direccion valida, enviaremos un correo para verificar tu cuenta.</Text>
                    <TextInput style={styles.txtinpt} placeholder="ejemplo@hotmail.com"
                    onChangeText = {(value) => setEmail(value)}/>
                    <Text style = {styles.txttilt}>Contraseña</Text>
                    <Text style = {styles.txtinf}>Establece una contraseña para iniciar sesion de minimo 6 digitos</Text>
                    <TextInput style = {styles.txtinpt} placeholder = "******"
                     secureTextEntry = {true}
                     onChangeText = {(value) => setPassword(value)}/>
                <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Logs")}
                onPressOut = {sumbit}>
                    <Text> Continuar </Text>
                </TouchableOpacity>
             <Image style={styles.imghead2} source={require('../Images/I2.png')}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: "center",
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txttilt:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:32,
        color:'black',
        marginTop: 10,
        marginHorizontal: 100,
    },
    txtinf:{
        marginHorizontal: 100, 
        marginTop: 5,
        fontSize:14,
    },
    txtinpt:{
        alignContent: 'center',
        justifyContent: 'center',
        padding: 1,
        marginTop: 15,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        fontSize: 20,
        width: '60%'

    },
    btn: {
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,
        paddingHorizontal: 75,
        
    },
    imghead:{
        height: 50,
        width: 500,
    },
    imghead2:{
        height: 50,
        width: 500,
        marginTop: 305
    }
})

export default Logs2