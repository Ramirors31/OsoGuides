import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,Alert } from 'react-native';
import TinderCard from 'react-tinder-card';
import firebase from '../database/firebase'



const Conecta = (props) =>{
    const onSwipe = (direction) => {
        if(direction === "right"){
            Alert.alert('Una nueva Conexion!!')
            console.log('Una nueva conexion!!!')
        }
    }
    const [people, setPeople] = useState([])

    useEffect(() => {
        const conectando = firebase.db.collection('usuarios').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
    ));
    return () => {
        conectando();
    }
}, [])


    return(
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image style={styles.imghead} source={require('../Images/I1.png')}/>
                </View>
                    <View style={{flexDirection:'row', alignSelf:'center'}}>
                        <View>
                            <Text style={styles.txt}>OsoGuides</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => props.navigation.navigate("")}>
                                <Image style={styles.imgnxt} source={require('../Images/Flecha.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {people.map((person) => (
                    <TinderCard onPress={() => props.navigation.navigate("Perfil")}
                    onSwipe = {onSwipe}>

                    <View>
                        <View>
                            <Image style={styles.imgcon} source={person.profPicture}/>
                        </View>
                        <View>
                            <Text style={styles.txtimg}>{person.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.txtimg2}>Ingeniero en Tecnologias del Software</Text>
                        </View>
                    </View>
                    </TinderCard>
                    ))}                    


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
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    txt:{
        color: 'green',
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 20,
        textAlign: "center"
    },
    imgcon:{
        
        alignSelf:'center',
        borderRadius: 25,
        height: 520,
        width: 380,
        marginTop: 20
    },
    txtimg:{
        alignSelf:'center',
        marginTop: -80,
        color: 'white',
        fontSize: 28
    },
    txtimg2:{
        alignSelf:'center',
        marginTop: -50,
        color: 'white',
        fontSize: 20
    },
    imghead:{
        height: 50,
        width: 500,
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
    txtinf:{
        fontSize:20,

    }, 
    imgnxt:{
        marginTop:20,
        height:30,
        width:30
    }
})

export default Conecta
