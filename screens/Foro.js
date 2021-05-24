import React, { PureComponent } from 'react';
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
        <ScrollView style={styles.generalContainer}>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txt}> Bienvenido a Oso Guides </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Post")}>
                            <Text style={styles.public}>Nueva Publicacion</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

    {publicando.map((publicac) => (
    <TinderCard 
    preventSwipe = {[ 'right' ,'left','down', 'up' ]} 
    key={publicac.id}>

        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate("Foro2", {
                                cardId: publicac.id,
                                cardTitulo: publicac.titulo,
<<<<<<< HEAD
                                cardContenido: publicac.contenido,
                                cardPhoto: publicac.authorPhoto,
                                cardAuthor: publicac.author
                                })}>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Image style={styles.imgment} source={publicac.authorPhoto}/>
=======
                                cardContenido: publicac.contenido
                                })}>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Image style={styles.imgment} source={require('../Images/ejemploPerfil.jpg')}/>
>>>>>>> b5f9e46077d20d8022060ece229823237c1a724c
                </View>
                    <View style={{flexDirection:'column'}}>
                        <View>
                            <Text style={styles.txtmensaj}> @{publicac.author} </Text>
                        </View>
                    </View>
            </View>
             <View>
<<<<<<< HEAD
                <Text style={styles.txtTitulo}>{publicac.titulo}</Text>
=======
                <Text style={styles.txtimg}>{publicac.titulo}</Text>
>>>>>>> b5f9e46077d20d8022060ece229823237c1a724c
            </View>
            <View>
                <Text style={styles.txtimg}>{publicac.contenido}</Text>
            </View>
<<<<<<< HEAD
            </TouchableOpacity>
        </View>
    </TinderCard>
                ))}
                    <View style={{flexDirection:'row', alignSelf:'center'}}>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("MyProfile")}>
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
=======
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
                            <Image style={styles.imgcomentario} source={require('../Images/comentario.png')} onPress={() => props.navigation.navigate("Foro2")}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </TinderCard>
                ))}

>>>>>>> b5f9e46077d20d8022060ece229823237c1a724c
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
        color:'gray',

    },
    txtTitulo: {
        fontSize: 25,
        fontWeight: 'bold'
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
        marginLeft:30,
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
    },
    generalContainer: {
        display: 'flex',
        
    }
})

export default Foro
