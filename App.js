import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator, StackView } from '@react-navigation/stack'

const Stack = createStackNavigator()

import SignIn from './screens/SignIn';
import Home from './screens/Home';
import Terms from './screens/Terms';
import Logs from './screens/Logs';
import Logs2 from './screens/Logs2';
import Namep from './screens/Namep';
import DateNac from './screens/DateNac';
import FotoIn from './screens/FotoIn';
import Modo from './screens/Modo';
import Auth from './screens/Auth';
import Password from './screens/Password';
import MyProfile from './screens/MyProfile';
import Conecta from './screens/Conecta';
import Conecta2 from './screens/Conecta2';
import Msj from './screens/Msj';
import Msj2 from './screens/Msj2';
import Descrp from './screens/Descrp';
import Feed from './screens/Feed';
import Carrera from './screens/Carrera';
import Foro from './screens/foro';
import Foro2 from './screens/Foro2';

function Mystack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title:''}}/>
      <Stack.Screen name  = "Descrp" component = {Descrp} options = {{title:''}}/>
      <Stack.Screen name="SignIn" component={SignIn} options={{title:''}}/>
      <Stack.Screen name="Terms" component={Terms} options={{title:''}}/>
      <Stack.Screen name= "Msj" component = {Msj} options = {{title:''}}/>
      <Stack.Screen name = "Msj2" component = {Msj2} options = {{title: ''}}/>
      <Stack.Screen name="Logs" component={Logs} options={{title:''}}/>
      <Stack.Screen name="Logs2" component={Logs2} options={{title:''}}/>
      <Stack.Screen name="Namep" component={Namep} options={{title:''}}/>
      <Stack.Screen name="DateNac" component={DateNac} options={{title:''}}/>
      <Stack.Screen name="FotoIn" component={FotoIn} options={{title:''}}/>
      <Stack.Screen name="Modo" component={Modo} options={{title:''}}/>
      <Stack.Screen name="Auth" component={Auth} options={{title:''}}/>
      <Stack.Screen name="Password" component={Password} options={{title:''}}/>
      <Stack.Screen name = "Conecta2" component = {Conecta2} options = {{title:''}}/>
      <Stack.Screen name  = "MyProfile" component = {MyProfile} options = {{title:''}}/>
      <Stack.Screen name = "Carrera" component = {Carrera} options = {{title: ''}}/>
      <Stack.Screen name = "Feed" component = {Feed} options = {{title:''}}/> 
      <Stack.Screen name = "Conecta" component = {Conecta} options = {{title: ''}}/>
      <Stack.Screen name = "Foro" component = {Foro} options={{title:''}}/>
      <Stack.Screen name = "Foro2" component = {Foro2} options={{title:''}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,

  },
  input:{
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20
  },
  title:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    alignContent: 'center'
  }
});
