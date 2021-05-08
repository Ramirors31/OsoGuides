import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

const Msj2 = (props) =>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txt}> Alexandra </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Image style={styles.imgment} source={require('../Images/IMG_7702.jpg')}/>
                    </View>
                    <View>
                        <Text style={styles.txtmensaj}> Hola, me puedes ayudar con un proyecto? </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <TextInput style={styles.txtinpt} placeholder=" Escriba un menaje... "/>
                    </View>
                    <TouchableOpacity style={styles.btnenv}> 
                        <Text style={styles.txtbtn}> Enviar       </Text>
                    </TouchableOpacity>
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
    },
    imgpls:{
        height:80,
        width:80,
        marginTop:50,
        marginRight:30,
        marginLeft:30
    },
    imgmsj:{
        height:100,
        width:100,
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
        marginTop:420,
        marginHorizontal:100,
        borderWidth:1,
        borderRadius:20,
        marginHorizontal:50
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
        marginTop:-50
    },
    txtmensaj:{
        marginTop:-35
    },
    imgmens:{
        marginTop:25,
        height:25,
        width:25
    },
    btnenv:{
        marginTop:420,
        borderWidth:1,
        borderColor:'black',
        width:55,
        height:30,
        borderRadius:10
    },
    txtbtn:{
        fontSize:16
    }
})

export default Msj2