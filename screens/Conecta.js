import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import TinderCard from 'react-tinder-card';



const Conecta = (props) =>{

    const [people, setPeople] = useState([ 
    {
        name: 'John Cena',
        photo: 'https://solowrestling.mundodeportivo.com/uploads/RESEM95844john_cena.jpg'

    },
    {
        name: 'Furcio',
        photo: 'data:image/jpeg;base64,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'
    },
    {
        name: 'Ba Buni',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PFMh4m4S_PPiPpdw12r6t-FeFWQLsWt9QQ&usqp=CAU'
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
                    <TinderCard>
                        <View>
                            <Image style={styles.imgcon} source={person.photo}/>
                        </View>
                        <View>
                            <Text style={styles.txtimg}>{person.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.txtimg2}>Ingeniero en Tecnologias del Software</Text>
                        </View>
                    </TinderCard>
                    ))}

            </View>
            <View>
                <Text style={styles.txtinf}>Nombre de la Persona</Text>
            </View>
            <View>
                <Text style={styles.txtinf}>Edad</Text>
            </View>
            <View>
                <Text style={styles.txtinf}>Hobbies</Text>
            </View>
            <View>
                <Text style={styles.txtinf}>Unidades de Aprendizaje Destacables</Text>
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
                        <Image style={styles.imgpls} source={require('../Images/Huella.png')}/>
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