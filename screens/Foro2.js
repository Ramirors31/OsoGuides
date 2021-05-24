<<<<<<< HEAD
import React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import PostCard from '../components/PostCard';
import firebase from '../database/firebase';
import TinderCard from 'react-tinder-card';

export default function Foro2({route}) {
    const {cardTitulo, cardContenido,cardPhoto,cardAuthor} = route.params;
    return(
        <View style = {styles.container}>
            <Image style={styles.imghead} source={require('../Images/I1.png')}/>
                <Image style= {styles.image} source ={cardPhoto}/>
            <View>
                <Text style= {styles.txtTitle}>{cardTitulo}</Text>
            </View>
            <View>
                <Text style={styles.userName}>Pubclicado por: {cardAuthor} </Text>
            </View>
            <View>
                <Text style= {styles.userName}>{cardContenido}</Text>
            </View>
            <View>
                <TextInput style={{marginTop: 20}} placeholder="Añadir Comentarios"></TextInput>
            </View>
            <View>
                <Button style= {styles.btnComent}>Comentar</Button>
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
                        <Image style={styles.imgpls} source={require('../Images/Garras.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
      },
      btnComent: {
          height:150,
          width: '80%'

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
      txtTitle: {
          fontSize: 30,
          fontWeight: 'bold',

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
        height: 150,
        width: 150,
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
        
    }
})
=======
import React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import PostCard from '../components/PostCard';
import firebase from '../database/firebase';
import TinderCard from 'react-tinder-card';

export default function Foro2({route}) {
    const {cardId, cardTitulo, cardContenido} = route.params;
    return(
        <View style = {styles.container}>
            <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            <View>
                <Text style= {styles.userName}>{cardTitulo}</Text>
            </View>
            <View>
                <Text style= {styles.userName}>{cardContenido}</Text>
            </View>
            <View>
                <TextInput placeholder="Añadir Comentarios"></TextInput>
            </View>
        </View>
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
>>>>>>> b5f9e46077d20d8022060ece229823237c1a724c
