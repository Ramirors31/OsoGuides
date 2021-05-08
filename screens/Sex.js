import React, {useState} from 'react';
import { View, Text, CheckBox, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Picker } from 'react-native';
import {newUser} from '../helpers/NewUser'
const Sex = (props) =>{
    const [gender,setGender] = useState({
        hombre: false,
        mujer: false,
        noBinario: false,
    });

    const handleSelection = (name,value) => {
        setGender({[name]:value});

    }

    function addSex(){
        if(gender.hombre ===true){
            newUser.gender = "Hombre"
            console.log(newUser);
        }
        else {
            if(gender.mujer === true){
                newUser.gender = "Mujer"
                console.log(newUser);
            }
            else {
                if(gender.noBinario === true){
                    newUser.gender = "No Binario"
                    console.log(newUser);
                }
            }
        }

    }
    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txttitl}>Soy</Text>
                </View>
                <View>
                <View style={styles.checkboxContainer}> 
                <CheckBox value={gender.hombre} onValueChange={(value) => handleSelection("hombre",value)} style={styles.checkbox}/>
                <View>
                    <Text style={styles.txtinp}>Hombre</Text>
                </View>
                </View>
                <View style={styles.checkboxContainer}> 
                <CheckBox value={gender.mujer} onValueChange={(value) => handleSelection("mujer", value)} style={styles.checkbox}/>
                <View>
                    <Text style={styles.txtinp}>Mujer</Text>
                </View>
                </View>
               <View style={styles.checkboxContainer}> 
                <CheckBox value={gender.noBinario} onValueChange={(value) => handleSelection("noBinario", value)} style={styles.checkbox}/>
                <View>
                    <Text style={styles.txtinp}>Genero No Binario</Text>
                </View>
                </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Modo")}
                    onPressOut = {addSex}>
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
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    txttitl:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:32,
        color:'black',
        marginTop:10,
        marginHorizontal: 100
    }, 
    checkbox: {
        alignSelf: "center",
        marginTop:13
      },
    txtinf:{
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 5, 
        marginTop: 20,
        fontSize:12,
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
        marginTop: 25
    },
    txtinp:{
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
        marginTop: 190
    }
})

export default Sex