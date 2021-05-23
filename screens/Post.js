import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import {newPost} from '../helpers/NewPost';
import firebase from '../database/firebase';
import {v4 as uuidv4} from 'uuid'


const Post = (props) =>{

    const [publicacion, setPublicacion] = useState('');
    const [pubTitle, setPubTitle] = useState('');

    const handleChangeText = (value) => { 
        setPublicacion(value)
    }

    const handleChangeTitle = (value) => {
        setPubTitle(value)
    }



    function addPost(){
        newPost.titulo = pubTitle;
        newPost.texto = publicacion;
        newPost.postid = uuidv4();

        const nuevoPost = {
            postid: newPost.postid,
            titulo:newPost.titulo,
            contenido: newPost.texto

        }

        firebase.db.collection('publicaciones')
        .doc()
        .set(nuevoPost)
    }

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
                    <TextInput style={styles.txtinp} placeholder="Añade un titulo interesante (Opcional)" 
                    onChangeText = {(value) => handleChangeTitle(value)}></TextInput>
                </View>
                <View>
                    <TextInput style={styles.txtinp2} placeholder="Escibre el texto de tu publicacion"
                    onChangeText = {(value) => handleChangeText(value)}></TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Foro")}
                    onPressOut = {addPost}>
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

export default Post