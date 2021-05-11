import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import firebase from '../database/firebase';

export default function MyProfile(props) {
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
   const userId = user.uid
   /*FOTO DE PERFIL GUARDADA EN FIREBASE*/
   const profilePicture = firebase.userAuth.currentUser.photoURL;
   /*REFERENCIA A LA BASE DE DATOS*/ 
   const userRef = firebase.db.collection("usuarios")
   /*CARRERA GUARDADA EN PERFIL DE FIREBASE*/
   const [carreer,setCarreer] = useState('');

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
   const userInformation = () => {
        firebase.db
       .collection('usuarios')
       .doc(userId)
       .get()
       .then(documentSnapshot => {
           
           if(documentSnapshot.exists){
               const descripcion = documentSnapshot.data().description;
               const namep = documentSnapshot.data().name;
               const carrera = documentSnapshot.data().carreer;
               setUserName(namep)
               setUserDesc(descripcion)
               setCarreer(carrera)
           }
       })
   }
   userInformation();
       
   /*SUBIR IMAGENES NUEVAS DESDE EL PERFIL*/ 
   const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.cancelled) {
          setImage(result.uri);
        }
      }; 

    return (
        <View style = {styles.container}>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            <View>
                <Image style={styles.profileImage} source = {{uri: profilePicture}}/>
            </View>
            <View>
                <Text style= {styles.userName}>{userName}.</Text>
            </View>
            <View>
                <Text style = {styles.informationText}>{carreer}</Text>
            </View>
            <View style = {styles.picturesContainer}>
               {/* <Image style = {styles.userImages} source = {require('../Images/mifoto1.jpg')}/>
                <Image style = {styles.userImages} source = {require('../Images/mifoto2.jpg')}/>
    <Image style = {styles.userImages} source = {require('../Images/foto3.jpg')}/> */}
                    <TouchableOpacity style = {styles.photoBtn}
                    onPress = {pickImage} >
                         <Text>+</Text>
                    </TouchableOpacity>
            </View>
            <View style = {styles.informationContainer}>
                <Text style = {styles.informationText}>Sobre mi</Text>
                <View>
                    <Text>{userDesc}</Text>
                    <TextInput style = {styles.txtInput}placeholder = "Tu descripcion no debe de pasar los 500 caracteres"
                    onChangeText = {(value) =>handleChange(value)}/>
                    <Button
                    onPress ={modificarDescripcion}
                    title= 'Editar Descripcion'
                    style= {{marginLeft:100}}/>
                </View>
                <Text style = {styles.informationText}>Mis Proyectos</Text>
                <TextInput/>
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

