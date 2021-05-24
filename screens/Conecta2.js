import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import firebase from '../database/firebase';

export default function Conecta2({route}) {
    const {cardId, cardName, cardPhoto, cardCarreer, cardDesc} = route.params;
   const [image, setImage] = useState('');
   /*ESTADO PARA NUEVA DESCRIPCION*/
   const [descrp, setDescrp] = useState('');
   /*DESCRIPCION MOSTRADA EN PANTALLA*/
   const [userDesc, setUserDesc] = useState('');
   /*NOMBRE DE USUARIO*/
   const [userName, setUserName] = useState('');
   /*AUTH USUARIO DE FIREBASE*/
   const user = firebase.userAuth.currentUser;
   /*ID DEL USUARIO ACTUAL EN LA BASE DE DATOS*/
   const userId = user.uid;
   /*FOTO DE PERFIL GUARDADA EN FIREBASE*/
   const [ proPic, setProPic] = useState('');
   /*REFERENCIA A LA BASE DE DATOS*/ 
   const userRef = firebase.db.collection("usuarios")
   /*CARRERA GUARDADA EN PERFIL DE FIREBASE*/
   const [carreer,setCarreer] = useState('');
   /*Mentor o Aprendiz */
    const[modo, setModo] = useState('');

    const profileId = () => {
       console.log(JSON.stringify(cardName))
    }
   

   /*MANEJO DEL CAMBIO DE DESCRIPCION*/
   const handleChange = (value) => {
       setDescrp(value)
   }
   /*ACTUALIZACION EN LA BASE DE DATOS*/
   const modificarDescripcion = () => {
       userRef.doc(userId)
       .update({
           description:descrp
       })
       setUserDesc(descrp);


   }

    return (
        <View style = {styles.container}>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            <View>
                <Image style={styles.profileImage} source = {cardPhoto}/>
            </View>
            <View>
                <Text style= {styles.userName}>{cardName}</Text>
            </View>
            <View>
                <Text style = {styles.informationText}>{cardCarreer}</Text>
            </View>
            <View>
                <Text>{modo}</Text>
            </View>

            <View style = {styles.informationContainer}>
                <Text style = {styles.informationText}>Sobre mi</Text>
                <View>
                    <Text>{cardDesc}</Text>
                 
                </View>
                <Text style = {styles.informationText}>Mis Proyectos</Text>
                <Button onPress={profileId}>Boton</Button>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex:1,
        alignItems: 'center'
    
    },

    imghead: {
        width: '100%',
        height: 50,
        marginBottom: 10

    },

    profileImage: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },

    userName: {
        marginTop: 10,
        fontSize: 35,
        fontWeight: 'bold',
    },
    informationText: {
        marginTop: 5,
        fontSize: 20
    },

    picturesContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 80,
        flexDirection: 'row',
        

    },

    userImages: {
        width:70,
        height: 70,
        borderRadius: 100,
        margin:3
    },

    photoBtn: {
        width:70,
        height: 70,
        borderRadius: 100,
        borderColor: 'black',
        display: 'flex',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    informationContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    txtInput: {
        height: 40,
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        
    }
})

