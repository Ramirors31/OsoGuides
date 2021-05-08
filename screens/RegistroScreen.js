import React, {useState}from 'react';
import { View, Text,TextInput, Button } from 'react-native';
import firebase from '../database/firebase';

const RegistroScreen = () => {

    const [state, setState] = useState( {
        name: "",
        email: "",
        password: "",
        birthday:"",
        gender:"",
        phone:"",
        mode:"",
    });

    const handleChangeText = (name,value) => {
        setState({ ...state, [name]: value})
    }

    const saveNewUser = async () => {
        if(state.name === ''){
            alert('please provide a name')
        }
        else {
            await firebase.dataBase.collection('users').add ({
                name: state.name,
                email: state.email,
                password: state.password
            })
            alert('saved');
        }
    }

    return (
        <View>
            <TextInput placeholder = "usuario"
            onChangeText = {(value) => handleChangeText('name', value)}/>
            <TextInput placeholder = "correo"
            onChangeText = {(value) => handleChangeText('email', value)}/>
            <TextInput placeholder = "contraseña"
            onChangeText = {(value) => handleChangeText('password', value)}/>
            <Button title = "Registrar" onPress = {() => saveNewUser()}/>
        </View>
    )
}

export default RegistroScreen
