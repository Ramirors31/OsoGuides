import React, {useState}from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import {newUser} from '../helpers/NewUser';
import firebase from '../database/firebase';


const Carrera = (props) =>{
    const [carreraUsuario, setCarrera] = useState('');

    const handleChangeText = (value) => {
        setCarrera(value);
    }

    function addCarrera() {
        newUser.carrera = carreraUsuario;
        console.log(newUser);
    }
    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txttitl}>¿Cuál es tu carrera?</Text>
                </View>
                <View>
                <TextInput style={styles.txtinpt} placeholder="Ing. en Sistemas"
                onChangeText = {(value) => handleChangeText(value)}/>
                </View>
                <View>
                    <Text style={styles.txtinf}>Asi aparecera en OsoGuides y no podras cambiarlo</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Modo")}
                    onPressOut = {addCarrera}>
                        <Text style={styles.btntxt}>Continuar</Text>
                    </TouchableOpacity>
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
        marginTop:100
    },
    txttitl:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:32,
        color:'black',
        marginTop:10,
        marginHorizontal: 100
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
    txtinf:{
        flex:1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 100, 
        marginTop: 20,
        fontSize:14,
    },
    btn:{
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        padding:1,
        borderRadius: 15,
        paddingHorizontal: 75,
        marginTop: -40
    },
    imghead:{
        height: 50,
        width: 500,
    },
    imghead2:{
        height: 50,
        width: 500,
        marginTop: 350
    }
})

export default Carrera