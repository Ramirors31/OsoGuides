import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import {newUser} from '../helpers/NewUser';

const DateNac = (props) =>{
    const [birthday, setBirthday] = useState('');

    const handleChangeText = (value) => {
        setBirthday(value);
    }

    function addBirthday() {
        newUser.birthday = birthday;
        console.log(newUser);
    }
    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txttitl}>Mi cumpleaños es</Text>
                </View>
                <View>
                    <TextInput 
                        style={styles.txtinpt} placeholder=" dd / mm / YYYY   "
                        onChangeText = {(value) => handleChangeText(value)}
                     />
                </View>
                <View>
                    <Text style={styles.txtinf}>Tu edad sera publica</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Terms")}
                    onPressOut = {addBirthday}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignContent: "center",
        alignItems: 'center',
        marginTop:100 
    },
    btn:{
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,
        paddingHorizontal: 75,
        marginTop: 120
    },
    txttitl:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:36,
        color:'black',
        marginHorizontal: 50,
        marginTop:5
    },
    txtinf:{
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 5,
        fontSize:12,
    },
    txtinpt:{
        marginTop:25,
        padding: 1,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        fontSize: 20,
        marginHorizontal:100
    },
    imghead:{
        height: 50,
        width: 500,
    },
    imghead2:{
        height: 50,
        width: 500,
        marginTop: 230
    }
})

export default DateNac