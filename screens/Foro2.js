import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import {newPost} from '../helpers/NewPost';
import firebase from '../database/firebase';

const Foro2 = (props) =>{
{/* 
    const [publicacion, setPublicacion] = useState('');
    const handleChangeText = (value) => { 
        setPublicacion(value)
    }

    const userId = firebase.userAuth.currentUser.uid;

    function addPost(){
        newPost.titulo = publicacion;
        console.log(newPost);
        console.log(userId);
        const foro = {
            titulo:newPost.titulo,
            texto:newPost.texto,
        }

        firebase.db.collection('publicaciones')
        .doc(userId)
        .set(foro)
    }
*/}
    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txttex}>Escribe tu publicacion</Text>
                </View>
                <View>
                    <TextInput style={styles.txtinp} placeholder="Añade un titulo interesante" 
                    onChangeText = {(value) => handleChangeText(value)}></TextInput>
                </View>
                <View>
                    <TextInput style={styles.txtinp2} placeholder="Escibre el texto de tu publicacion (opcional)"
                    onChangeText = {(value) => handleChangeText(value)}></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Foro")}
                    /*onPressOut = {addPost}*/>
                        <Text>Publicar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={{flexDirection:'row', alignSelf:'center', marginTop:400}}>
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
                        <Image style={styles.imgpls} source={require('../Images/Garras.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    txttex:{
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center",
        marginVertical:25
    },
    txtinp:{
        marginLeft:10,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        fontSize: 20,
        marginTop:10,
        marginHorizontal:100
    },
    txtinp2:{
        marginLeft:10,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        fontSize: 14,
        marginTop:10,
        marginHorizontal:100
    },
    btn:{
        marginTop:10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
        marginHorizontal:50
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
    imghead:{
        height: 50,
        width: 500,
    }
})

export default Foro2