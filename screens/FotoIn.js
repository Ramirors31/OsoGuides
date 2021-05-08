import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../database/firebase';

const FotoIn = (props) =>{
    const user = firebase.userAuth.currentUser;
    const [image, setImage] = useState('');
   
    const pickImage = async () => {
         let result = await ImagePicker.launchImageLibraryAsync({
           mediaTypes: ImagePicker.MediaTypeOptions.All,
           allowsEditing: false,
           aspect: [4, 3],
           quality: 1,
         });
     
     
         if (!result.cancelled) {
           setImage(result.uri);
           user.updateProfile({
            photoURL: result.uri,
          }).then(function() {
            console.log('imagen subida con exit0')
          }).catch(function(error) {
            console.log(error)
          });
          

         }
       }; 
    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style = {styles.txtTitle}>Añade tu primer foto de perfil</Text>
                    <TouchableOpacity style={styles.photoBtn}
                    onPress={pickImage}>
                    <Image style={styles.imgadd} source={require('../Images/AddImage.png')}/>
                    </TouchableOpacity>
                </View>
                <View>
                    
                </View>
                <View>
                    <TouchableOpacity style={styles.btn}onPress={() => props.navigation.navigate("Descrp")}>
                        <Text>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Image style={styles.imghead2} source={require('../Images/I2.png')}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1, 
        alignContent: "center",
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    txtTitle:{
        fontWeight:"bold",
        fontFamily: 'sans-serif',
        fontSize:32,
        color:'black',
        marginHorizontal: 100
    },
    btn:{
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,
        paddingHorizontal: 75,
        marginTop: 100
    },
    photoBtn: {
        borderColor: 'black',
        borderRadius: 150,
        borderWidth: 1,
        width:250,
        height:250,
        display: 'flex',
        alignItems : 'center',
        justifyContent: 'center',
        margin: 50,

    },

    imgadd:{
        marginTop:25,
        width:150,
        height:150,
        backgroundColor: 'red'
    },
    imghead:{
        height: 50,
        width: 500,
    },
    imghead2:{
        height: 50,
        width: 500,
        marginTop: 150
    }
})

export default FotoIn