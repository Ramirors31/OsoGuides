import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Home = (props) =>{
    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('../Images/LOGO_OSOS.png')}/>
            </View>
            <View>
                <Image style={styles.imgtilte} source={require('../Images/LOGO_LETRA.png')}/>
            </View>
            <View>
                <TouchableOpacity style={styles.btnpr} onPress={() => props.navigation.navigate("Logs2")}>
                    <Text style={styles.text}>Crear cuenta</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Auth")}>
                    <Text style={styles.text}>Iniciar Sesion</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={styles.imghead2} source={require('../Images/I2.png')}/>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignContent: "center",
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop:75 
      },
      btnpr:{
        alignContent:'center',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        borderRadius: 15,
        paddingHorizontal: 75,
        marginTop:110
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
        marginTop: 10
    },
    text:{
        fontSize:15,
        color:'gray'
    },
    image:{
        marginTop: -15,
        height: 200,
        width: 200,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgtilte:{
        height: 50,
        width:250
    },
    imghead:{
        height: 50,
        width: 500,
    },
    imghead2:{
        height: 50,
        width: 500,
        marginTop: 180
    }
})

export default Home