import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    if (password === confirmPassword) {
      console.log('Registered: ', { username, email, password });

    
      navigation.navigate('Login', { username });
    } else {
      console.error('Passwords do not match!');
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image source={require('../images/OGLogo.png')} style={styles.logo} />
        <Text style={{ fontSize: 42, justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: 20 }}>
          Register
        </Text>

        <View style={styles.TextInput}>
          <AntDesign name="user" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
        </View>

        <View style={styles.TextInput}>
          <MaterialIcons name="alternate-email" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
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

        <View style={styles.TextInput}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity onPress={handleRegistration} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.sign1}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.already}>
          <Text>Already Sign Up?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#279EFF', textDecorationLine: 'underline', marginLeft: 5 }}>Sign In</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 20,
  },
  already: {
    flexDirection: 'row',
    marginTop: 8,
  },
});
