import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Terms = (props) =>{
    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View>
                    <Image style={styles.img} source={require('../Images/LOGO_OSOS.png')}/>
                </View>
                <View>
                    <Text style={styles.txttilt}>Te damos la bienvenida a OsoGuides.</Text>
                </View>
                <View>
                    <Text style={styles.txtinf}>Por favor sigue estas reglas</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <Image style={styles.imgc} source={require('../Images/cjeck.png')}/>
                    <Text style={styles.txtterm}> No finjas ser alguien mas</Text>
                </View>
                <View>
                    <Text style={styles.txtterms2}>Asegurate de que tus fotos, edad y biografia, correspondan con quien eres actualmente</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <Image style={styles.imgc} source={require('../Images/cjeck.png')}/>
                    <Text style={styles.txtterm}> Cuidate                              </Text>
                </View>
                <View>
                    <Text style={styles.txtterms2}>No des tu informacion personal demasiado pronto. Ten cautela en tus citas</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <Image style={styles.imgc} source={require('../Images/cjeck.png')}/>
                    <Text style={styles.txtterm}>Tomalo con calma              </Text>
                </View>
                <View>
                    <Text style={styles.txtterms2}>Respeta a los demas y tratalos como te gustaria que te trataran</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <Image style={styles.imgc} source={require('../Images/cjeck.png')}/>
                    <Text style={styles.txtterm}>Toma la iniciativa                </Text>
                </View>
                <View>
                    <Text style={styles.txtterms2}>Siempre denuncia el mal comportamiento</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Namep")}>
                        <Text>Acepto</Text>
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
        marginTop:30 
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
        marginTop: 10
    },
    img:{
        height: 75,
        width: 75,
    },
    txttilt:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:16,
        color:'black',
        marginHorizontal: 50,
        marginTop:5
    },
    txtinf:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:12,
        color: '#949494',
        marginHorizontal: 50,
        marginTop:5
    },
    txtterm:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:14,
        color:'black',
        marginTop:15
    },
    txtterms2:{
        fontFamily: 'sans-serif',
        fontSize:14,
        color: 'gray',
        marginTop: 10,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 110
    },
    imghead:{
        height: 50,
        width: 500,
    },
    imghead2:{
        height: 50,
        width: 500,
        marginTop: 25
    },
    imgc:{
        height: 25,
        width: 25,
        marginTop:10
    }
})

export default Terms
