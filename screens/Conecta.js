import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import TinderCard from 'react-tinder-card';
import firebase from '../database/firebase'



const Conecta = (props) =>{

    const [people, setPeople] = useState([    
        {
        name: 'Sergio P.',
        photo: 'https://scontent.fntr1-1.fna.fbcdn.net/v/t1.6435-9/148177856_3831208780279361_5252309226589604836_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHu0-Co31iDypZX4uCs9J5XyIU8SRFB7RrIhTxJEUHtGjSr6TEdHDHJOQwgSiUlZts&_nc_ohc=cA0sqxbZw0sAX9gK7go&_nc_ht=scontent.fntr1-1.fna&oh=d76bfcb9323be22f821f59b0ce96df2b&oe=60BFB970'

    },
    {
        name: 'Ramiro J.',
        photo: 'https://scontent.fntr1-1.fna.fbcdn.net/v/t1.6435-9/143135847_10215014611078152_1279290876736855862_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGKzUbmHkN56-Zv1K0QF8qXZzcRYJD08jRnNxFgkPTyNKI6admuHlePMpsOCOh2xA8&_nc_ohc=UyCyv6M5MEwAX_ixoAy&_nc_ht=scontent.fntr1-1.fna&oh=4e42b562eda1ef6d74d2cb1cab260022&oe=60BFA793'
    },
    {
        name: 'Alexandra O.',
        photo: 'https://scontent.fntr1-1.fna.fbcdn.net/v/t1.6435-9/33116196_1684558658246962_6491148580282171392_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEeiXF2SYk7Jj65ka_QhfBFM3aaEaqe63UzdpoRqp7rdTwUdtUaXVUSO51UJI-d3U4&_nc_ohc=XAcqPnDcBZsAX9SMHwj&_nc_ht=scontent.fntr1-1.fna&oh=bce61437b2b6098ace478085596b104d&oe=60BF2480'
    },
    {
        name: 'Jorge',
        photo: 'https://store-images.s-microsoft.com/image/apps.36764.13817186670444302.148c432a-9fce-4c7d-bf13-8a2bd3a527b3.2a7b94f3-ed66-45b6-aaf3-337c18d442cd'
    },
    {
        name: 'Jesus G.',
        photo: 'https://scontent.fntr1-1.fna.fbcdn.net/v/t1.18169-9/12294809_1080014958684123_2040497482228496079_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_eui2=AeF6ztIvnxQ_uQW9dLoN0rEvScoz_WAPVQtJyjP9YA9VC8Jo9mxsmgbov7mpgL7CSdQ&_nc_ohc=K0FGpugM2DoAX-9llgB&_nc_ht=scontent.fntr1-1.fna&oh=190fb71451af523a7218c42390d86d98&oe=60C0C381'
    }])


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
                    <TinderCard onPress={() => props.navigation.navigate("Perfil")}>

                    <View>
                        <View>
                            <Image style={styles.imgcon} source={person.photo}/>
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
