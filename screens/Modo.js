import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, CheckBox } from 'react-native';
import {newUser} from '../helpers/NewUser';
import firebase from '../database/firebase';
const Modo = (props) =>{
    const [isSelected, setSelection] = useState({
        mentor: false,
        aprendiz:false,
    });

    const handleSelection= (name, value) => {
        setSelection({[name]: value})
        console.log(isSelected.mentor);

    }

    function addModo() {
        if (isSelected.mentor === true){
            newUser.mode = "Mentor"
            console.log(newUser);

        }
        else {
            if(isSelected.aprendiz === true) {
                newUser.mode = "Aprendiz";
                console.log(newUser)

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
                    <Text style={styles.txttitle}>Elegir un modo para empezar</Text>
                </View>
                <View>
                    <Text style={styles.txtterm}>Oso Mentor</Text>
                </View>
                <View style={{flexDirection:'row', marginHorizontal:100}}>
                    <View>
                        <Text style={styles.txtterms2}>Trata a los demas como te gustaria que te trataran</Text>
                    </View>
                    <View>
                        <CheckBox value={isSelected.mentor} onValueChange={(value) => handleSelection("mentor", value)} 
                        style={styles.checkbox}/>
                    </View>
                </View>
                <View>
                    <Text style={styles.txtterm}>Oso Apreniz</Text>
                </View>
                <View style={{flexDirection:'row', marginHorizontal:100}}>
                    <View>
                        <Text style={styles.txtterms2}>Trata a los demas como te gustaria que te trataran</Text>
                    </View>
                    <View>
                    <CheckBox value={isSelected.aprendiz} onValueChange={(value) => handleSelection("aprendiz", value)} 
                        style={styles.checkbox}/>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("FotoIn")}
                    onPressOut = {addModo}>
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
    checkbox: {
        alignSelf: "center",
        marginTop:5,
        borderRadius:500
    },
    secc:{
        
        flexDirection:'column'
    },
    txtterm:{
        marginHorizontal:-110,
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:18,
        color:'black',
        marginTop:15
    },
    txtterms2:{
        alignItems:'center',
        fontFamily: 'sans-serif',
        fontSize:14,
        color: 'gray',
        marginTop: 10,
        marginHorizontal:10
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
        marginTop: 150
    }
})

export default Modo