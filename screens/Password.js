import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';
import {newUser} from '../helpers/NewUser';

const Password = (props) =>{
    const [userPassword, setUserPassword] = useState('');

    const handleChangeText = (value) => {
        setUserPassword(value);
    }

    function addUserPassword() {
        newUser.password = userPassword;
        console.log(newUser);
    }
    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View></View>
                <View>
                    <Text style={styles.txttilt}>Contraseña</Text>
                </View>
                <View>
                    <Text style={styles.txtinf}>Elige una contraseña que recuerdes y consideres segura</Text>
                </View>
                <View>
                    <TextInput style={styles.txtinpt} placeholder="Contraseña"
                    onChangeText = {(value) => handleChangeText(value)}/>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Terms")}
                onPressOut = {addUserPassword}>
                    <Text> Continuar </Text>
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
        marginTop:150 
    },
    txttilt:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:32,
        color:'black',
        marginHorizontal: 100,
    },
    txtinf:{
        flex:1,
        alignItems: 'center',
        alignContent: 'center',
        marginHorizontal: 100, 
        marginTop: 1,
        fontSize:14,
    },
    txtinpt:{
        padding: 1,
        marginTop: -120,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        fontSize: 20,
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
        marginTop: -0
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

export default Password