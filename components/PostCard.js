import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'

const PostCard = (props) => {
    return (
        <View style ={styles.container}>  
            <View style = {styles.postInfo}>
                <View>
                <Image style = {styles.profPicture} source ={require('../Images/ramiro.jpg')}/>
                </View>
                <View style = {styles.postDetails}>
                    <Text>@user </Text>
                    <Text>11/10/2021 - 00:00 am</Text>
                </View>
            </View>
            <View style = {styles.postContent}>
                <Text style = {{fontSize: 25}}>Aqui iria todo el contenido del post</Text>
            </View>
            <View style = {styles.postInteraction}>
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
    )
}

export default PostCard

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: 150,
        backgroundColor: 'yellow',
        flexDirection: 'column',

    },
    postInfo: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    profPicture: {
        borderColor: 'black',
        borderRadius: 100,
        height: 60,
        width: 60 
    },
    postDetails: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10
    },
    postInteraction: {
        display: 'flex',
        flexDirection: 'row',
        height: 20

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

})
