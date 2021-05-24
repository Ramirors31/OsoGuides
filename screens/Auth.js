import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image,TextInput, Alert, Button } from 'react-native';
import firebase from '../database/firebase';

const Auth = (props) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //AUTENTIFICACION DE USUARIOS CON FIREBASE
    const validarUsuario =async () => {
        firebase.userAuth.signInWithEmailAndPassword(email,password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            props.navigation.navigate('Foro');
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            Alert.alert(errorMessage);
          });


    };

    
    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txttitle}>Ingrese los siguientes datos</Text>
                </View>
                <View>
                    <Text style={styles.txt}>Correo Electronico</Text>
                </View>
                <View>
                    <TextInput style={styles.txtinpt} placeholder="ejemplo@hotmail.com"
                    onChangeText = {(value) => setEmail(value)}/>
                </View>
                <View>
                    <Text style={styles.txt}>Contraseña</Text>
                </View>
                <View>
                    <TextInput style={styles.txtinpt} placeholder= "*******"
                    secureTextEntry = {true}
                    onChangeText = {(value) => setPassword(value)}/>
                </View>
                <View>
                    <Button style={styles.btn} 
                    onPress ={validarUsuario}
                    title = "ingresar"/>
                </View>
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
        marginTop:150,
    },
    txttitle:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:28,
        color:'black',
        marginTop:-15,
        marginHorizontal: 100
    },
    txtinpt:{
        marginTop: 15,
        marginBottom: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        fontSize: 14,
        marginHorizontal: 50
    },
    txt:{
        marginTop:20,
        marginHorizontal:-100,
        fontSize:20
    },
    btn:{
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,
        paddingHorizontal: 75,
        marginTop: 100
    },
    imghead:{
        height: 50,
        width: 500,
    },
    imghead2:{
        height: 50,
        width: 500,
        marginTop: 110
    }
})

export default Auth