import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

const Msj = (props) =>{
    return(
        <ScrollView>
            <View>
                    <Image style={styles.imghead} source={require('../Images/I1.png')}/>
                </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txt}> Aqui te podras comunicar directamente con las personas </Text>
                </View>
                <View>
                    <TextInput style={styles.txtinpt} placeholder="         Buscar Mentor"/>
                </View>
                <View>
                    <Text style={styles.txtment}> Mentores Nuevos </Text>
                </View>
                <View>
                    <Image style={styles.imgment} source={require('../Images/IMG_7702.jpg')}/>
                </View>
                <View>
                    <Text>Alexandra</Text>
                </View>
                <View>
                    <Text style={styles.txtment}> Mensajes </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Image style={styles.imgment} source={require('../Images/IMG_7702.jpg')}/>
                    </View>
                    <View>
                        <Text style={styles.txtmensaj}> Hola, me puedes ayudar con un proyecto? </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Msj2")}>
                            <Image style={styles.imgmens} source={require('../Images/Flecha.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center', marginTop:230}}>
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
                    <TouchableOpacity onPress={() => props.navigation.navigate("Foro")}>
                        <Image style={styles.imgpls} source={require('../Images/discusion.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        
        marginTop:150,
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
    txt:{
        color: 'green',
        fontWeight: 'bold',
        marginTop: -100,
        fontSize: 20,
        textAlign: "center"
    },
    txtinpt:{
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        fontSize: 20,
        marginTop:-30,
        marginHorizontal:100
    },
    imghead:{
        height: 50,
        width: 500,
    },
    txtment:{
        alignSelf:'flex-start',
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:10
    },
    imgment:{
        height:50,
        width:50,
        borderRadius:50,
        marginTop:10
    },
    txtmensaj:{
        marginTop:25
    },
    imgmens:{
        marginTop:25,
        height:25,
        width:25
    }
})

export default Msj
