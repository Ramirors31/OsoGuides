import React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import PostCard from '../components/PostCard';
import firebase from '../database/firebase';

const Foro = (props) =>{
//DECLARAMOS EL ARREGLO DONDE SE GUARDARAN LOS POSTS
const [posts,setPosts] = useState([])
//FUNCION QUE CARGA PUBLICACIONES DE LA BASE DE DATOS AL REFRESCAR
useEffect(() => {
   /* firebase.db.collection('publicaciones')
    .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => posts.push(doc.data()))
        setPosts(posts.map((post) =>))
        })*/
    firebase.db.collection('publicaciones')
        .onSnapshot((snapshot) => {
            snapshot.forEach((post) => {
                setPosts(post.data())
            })
        })
    })
    return( 
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txt}> Foro para interactuar con demas usuarios </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <TextInput style={styles.txtinp} placeholder="Buscar Publicacion"></TextInput>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Post")}>
                            <Text style={styles.public}>Publicar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    txt:{
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center"
    },
    txtinp:{
        marginLeft:10,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        fontSize: 20,
        marginTop:5,
    },
    public:{
        fontSize:20,
        color:'gray'

    },
    imgment:{
        height:50,
        width:50,
        borderRadius:50,
        marginTop:10
    },
    txtmensaj:{
        marginTop:12
    },
    txtpubli:{
        fontSize:24
    },
    publicacion:{
        
        marginLeft:5,
        marginRight:5
    },
    imglikedislike:{
        marginTop:10,
        width:30,
        height:30
    },
    imgcomentario:{
        marginTop:10,
        width:30,
        height:30,
        marginLeft:50
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
    btn:{
        marginLeft:20,
        marginTop:10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40
    },
    imghead:{
        height: 50,
        width: 500,
    }
})

export default Foro