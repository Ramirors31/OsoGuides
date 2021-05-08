import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput, Picker} from 'react-native';
import {newUser} from '../helpers/NewUser';
import firebase from '../database/firebase';

const Logs = (props) =>{
    const [selectedValue, setSelectedValue] = useState("mx")
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleChangeText = (value) => {
        setPhoneNumber(value);
    }

    function addPhoneNumber() {

       newUser.phone = phoneNumber;
        console.log(newUser)
       }
    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
        <View style={styles.container}>
            <View>
                <Text style={styles.txttilt}>Mi numero es</Text>
                <View style={{flexDirection:'row'}}>
                    <Picker selectedValue={selectedValue} 
                    style={styles.lista} 
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="+52" value="mx" />
                        <Picker.Item label="+33" value="mx2" />
                    </Picker>
                    <TextInput style={styles.txtinpt}
                        onChangeText = {(value) => handleChangeText(value)}
                        keyboardType = 'numeric'
                    />
                </View>
            </View>
            <View>
                <Text style={styles.txtinf}>Te enviaremos un mensaje de texto con un codigo de verificacion. Pudieran aplicarse tarifas por mensajes y datos. Conocce que pasa cuando cambia tu numero</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPressOut={() => props.navigation.navigate("DateNac")}
                onPress = {addPhoneNumber}
                >
                    <Text>Continuar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        <View>
             <Image style={styles.imghead2} source={require('../Images/I2.png')}/>
        </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignContent: "center",

        alignItems: 'center',
        marginTop:180 
    },
    lista:{ 
        flex:1,
        height: 50, 
        width: 80, 
        padding: 1,
        marginBottom: 10,
        borderColor: 'transparent', 
        backgroundColor:'transparent',
        fontSize: 20
    },
    txttilt:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:32,
        color:'black'
    },
    txtinpt:{
        flex: 1,
        padding: 1,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        fontSize: 20
    },
    txtinf:{
        flex:1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 100, 
        marginTop: 30,
        fontSize:12,
    },
    txtnum:{
        flex:1,
        fontSize:20
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
        marginTop: 25
    },
    imghead:{
        height: 50,
        width: 500,
    },
    imghead2:{
        height: 50,
        width: 500,
        marginTop: 240
    }
})

export default Logs
