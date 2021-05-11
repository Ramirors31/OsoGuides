import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const Foro = (props) =>{
    return(
        <ScrollView>
            <View>
                <Image style={styles.imghead} source={require('../Images/I1.png')}/>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txt}> Foro para interactuar con demas usuarios </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <TextInput style={styles.txtinp} placeholder="Buscar Publicacion"></TextInput>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Foro2")}>
                            <Text style={styles.public}>Publicar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.publicacion}>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Image style={styles.imgment} source={require('../Images/ejemploPerfil.jpg')}/>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View>
                            <Text style={styles.txtmensaj}> @NombreUsuario </Text>
                        </View>
                        <View>
                            <Text>@TiempoPublicado</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.txtpubli}>Me podrian decir buenos cursos de programacion</Text>
                </View>
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
                            <Image style={styles.imgcomentario} source={require('../Images/comentario.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
                
                <View style={styles.publicacion}>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Image style={styles.imgment} source={require('../Images/sergio.jpg')}/>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View>
                            <Text style={styles.txtmensaj}> @NombreUsuario </Text>
                        </View>
                        <View>
                            <Text>@TiempoPublicado</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.txtpubli}>Alguien que me diga que se necesita para beca de escasos recursos</Text>
                </View>
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
                            <Image style={styles.imgcomentario} source={require('../Images/comentario.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            
                <View style={styles.publicacion}>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Image style={styles.imgment} source={require('../Images/IMG_7702.jpg')}/>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View>
                            <Text style={styles.txtmensaj}> @NombreUsuario </Text>
                        </View>
                        <View>
                            <Text>@TiempoPublicado</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.txtpubli}>Que me pueden decir acerca de los cursos de ingles de la Facultad</Text>
                </View>
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
                            <Image style={styles.imgcomentario} source={require('../Images/comentario.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            
                <View style={{flexDirection:'row', alignSelf:'center', marginTop:30}}>
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
        color:'gray'

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
        marginLeft:20,
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
    }
})

export default Foro