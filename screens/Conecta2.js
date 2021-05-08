import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';


const Conecta2 = (props) =>{
    function goConecta() {
        props.navigation.navigate('Conecta');
    }
    return(
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image style={styles.imghead} source={require('../Images/I1.png')}/>
                </View>
                <View style={{flexDirection:'row', alignSelf:'center'}}>
                        <View>
                            <TouchableOpacity onPress={goConecta}>
                                <Image style={styles.imgnxt} source={require('../Images/FlechaR.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.txt}>OsoGuides</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => props.navigation.navigate("Conecta2")}>
                                <Image style={styles.imgnxt} source={require('../Images/Flecha.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image style={styles.imgcon} source={require('../Images/sergio.jpg')}/>
                    </View>
                    <View>
                        <Text style={styles.txtimg}>Ramiro</Text>
                    </View>
                    <View>
                        <Text style={styles.txtimg2}>Ingeniero en Tecnologias del Software</Text>
                    </View>
            </View>
            <View>
                <Text style={styles.txtinf}>Nombre de la Persona</Text>
            </View>
            <View>
                <Text style={styles.txtinf}>Edad</Text>
            </View>
            <View>
                <Text style={styles.txtinf}>Hobbies</Text>
            </View>
            <View>
                <Text style={styles.txtinf}>Unidades de Aprendizaje Destacables</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("perfil")}>
                        <Image style={styles.imgpls} source={require('../Images/perfil.png')}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Conecta")}>
                        <Image style={styles.imgpls} source={require('../Images/plus.png')}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Msj")}>
                        <Image style={styles.imgpls} source={require('../Images/Huella.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    txt:{
        color: 'green',
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 20,
        textAlign: "center"
    },
    imgcon:{
        
        alignSelf:'center',
        borderRadius: 25,
        height: 520,
        width: 380,
        marginTop: 20
    },
    txtimg:{
        alignSelf:'center',
        marginTop: -80,
        color: 'white',
        fontSize: 28
    },
    txtimg2:{
        alignSelf:'center',
        marginTop: -50,
        color: 'white',
        fontSize: 20
    },
    imghead:{
        height: 50,
        width: 500,
    },
    imgperf:{
        height:80,
        width:80,
        marginTop:15,
    },
    imgpls:{
        height:80,
        width:80,
        marginTop:15,
        marginRight:30,
        marginLeft:30
    },
    imgmsj:{
        height:100,
        width:100,
        marginTop:15,
    },
    txtinf:{
        fontSize:20,

    }, 
    imgnxt:{
        marginTop:20,
        height:30,
        width:30
    }
})

export default Conecta2