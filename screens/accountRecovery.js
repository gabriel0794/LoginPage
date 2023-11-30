import { View, Text, StyleSheet, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

export default function AccountRecovery({navigation}) {
  return (

    <SafeAreaView style={styles.container}>
        <StatusBar />
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>Forgot Password?</Text>
      <Text style={{fontSize: 16}}>Don't we can recover that using your email</Text>
      
      <View style={styles.TextInput}>
      <MaterialIcons name="alternate-email" size={24} color="black" />
      <TextInput style={styles.input} placeholder='Email Address'  keyboardType="email-address"/>
      
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.recov}>
      <AntDesign name="arrowleft" size={24} color='#40F8FF'/>
            <Text style={{color: '#40F8FF'}}>Send Recovery Instructions</Text>
        </TouchableOpacity>
    
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 90,
        paddingHorizontal: 20
    },
    input: {
        marginLeft: 10,
    },
    TextInput: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: 300,
        maxWidth: '80%',
        padding: 15,
        backgroundColor: '#D9D9D9',
        borderRadius: 15,
        marginTop: 300,
    },
    recov: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        maxWidth: '80%',
        padding: 15,
        borderWidth: 2,
        borderColor: '#40F8FF',
        borderRadius: 15,
        marginTop: 10,
    },
})