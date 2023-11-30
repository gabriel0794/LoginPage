import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function LoginScreen({ navigation, route }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registeredUsername = route.params?.username;

  const handleSignup = () => {
    console.log('Entered credentials:', { username, password });
    console.log('Registered username:', registeredUsername);

    if (username === registeredUsername) {
      console.log('Valid credentials');
      
      
      navigation.navigate('Home');
    } else {
      console.error('Invalid credentials');
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image source={require('../images/OGLogo.png')} style={styles.logo} />
        <Text style={{ fontSize: 42, justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: 20 }}>
          Sign In
        </Text>

        <View style={styles.TextInput}>
          <AntDesign name="user" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.TextInput}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Recovery')} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignup} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.sign}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.sign1}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  TextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 280,
    maxWidth: '80%',
    padding: 15,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    paddingBottom: 8,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
  },
  forgot: {
    color: '#279EFF',
    textDecorationLine: 'underline',
  },
  sign: {
    padding: 15,
    backgroundColor: '#40F8FF',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 2,
    width: 200,
    borderRadius: 10,
    fontSize: 20,
    color: '#FFFF',
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
    fontSize: 20,
  },
});
