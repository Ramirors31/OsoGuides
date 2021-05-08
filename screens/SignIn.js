import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SignIn = (props) =>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text>Bienvenido</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignContent: "center",
        alignItems: 'center',
        marginTop:150,
    }
})

export default SignIn