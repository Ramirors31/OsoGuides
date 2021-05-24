import React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import PostCard from '../components/PostCard';
import firebase from '../database/firebase';
import TinderCard from 'react-tinder-card';

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
    
    const [people, setPeople] = useState([])

    useEffect(() => {
        const conectando = firebase.db.collection('usuarios').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
    ));
    return () => {
        conectando();
    }
}, [])

const [publicando, setPublicando] = useState([])

useEffect(() => {
    const publica = firebase.db.collection('publicaciones').onSnapshot(snapshot =>(
        setPublicando(snapshot.docs.map(doc => doc.data()))
    ));
    return () => {
        publica();
    }
},[])


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
                <View style={styles.publicacion}>
                
                {publicando.map((publicac) => (
                    <TinderCard preventSwipe = { [ 'left' ,'right','up', 'down' ]}>
                        <View style={{flexDirection:'row'}}>
                    <View>
                        <Image style={styles.imgment} source={require('../Images/ejemploPerfil.jpg')}/>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View>
                            <Text style={styles.txtmensaj}> @Nombreusuario </Text>
                        </View>
                        <View>
                            <Text>@TiempoPublicado</Text>
                        </View>
                    </View>
                </View>
                        <View>
                            <View>
                                <Text style={styles.txtimg}>{publicac.titulo}</Text>
                            </View>
                            <View>
                                <Text style={styles.txtimg}>{publicac.contenido}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                    <View>
                        <TouchableOpacity>
                            <Image style={styles.imglikedislike} source={require('../Images/like.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image style={styles.imglikedislike} source={require('../Images/Dislike.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image style={styles.imgcomentario} source={require('../Images/comentario.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                    </TinderCard>
                ))}
                
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
        width: '100%',
        marginLeft:5,
        marginRight:5,
        marginBottom: '#e1dbda'
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