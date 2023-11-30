import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LandingScreen({navigation}) {
  return (
    <View style={styles.container}>
       <Image source={require('../images/OGLogo.png')} style={styles.logo}/>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome to my website</Text>
      <Text style={{fontSize: 18,}}>to start, please Sign In or Sign Up</Text>
      <Text style={{fontSize: 18, marginBottom: 20}}>if you don't have an account yet.</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.sign}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.sign1}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 300,
        height: 300,
    },
    sign: {
        padding: 15,
        backgroundColor: '#40F8FF',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFFF',
        marginTop: 15,
        marginBottom: 2,
        width: 200,
        borderRadius: 10,
        fontSize: 20
    },
    sign1: {
        padding: 15,
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#40F8FF',
        marginBottom: 2,
        width: 200,
        borderRadius: 10,
        color: '#40F8FF',
        marginTop: 15,
        fontSize: 20
    },

})