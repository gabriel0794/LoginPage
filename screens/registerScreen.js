import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import fetchServices from '../component/services/fetchServices';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setrePassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  
  const showToast = (message = "Something went wrong") => {
    ToastAndroid.show(message, 3000);
  }

  const handleRegistration = async () => {
    try{
      setLoading(true);
      if(name === "" || email === "" || password === ""){
        showToast("Please input required data");
        setIsError(true);
        return false;
      }

      if(password !== repassword){
        showToast("Password does not match");
        setIsError(true);
        return false;
      }

      const url = "http://192.168.1.5/api/v1/register";
      const data = {
        name,
        email,
        password,
        password_confirmation: repassword,
      };

    const result = await fetchServices.postData(url, data);
    console.debug(result);
    if(result.message != null){
      showToast(result?.message);
    }else{
      navigation.navigate('Login')
    }
    }catch(e){
      console.debug("test");
      showToast(e.toString());
    } finally{
      setLoading(false);
    }

  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image source={require('../images/OGLogo.png')} style={styles.logo} />
        <Text style={{ fontSize: 50,  marginBottom: 15, color: '#FFFF' }}>
          Register
        </Text>

        <View style={styles.TextInput}>
          <AntDesign name="user" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Name" 
          label="Name"
          value={name}
          onChangeText={setName}
          error={isError} />
        </View>

        <View style={styles.TextInput}>
          <MaterialIcons name="alternate-email" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            error={isError}
          />
        </View>

        <View style={styles.TextInput}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            label="Password"
            value={password}
            onChangeText={setPassword}
            error={isError} 
          />
        </View>

        <View style={styles.TextInput}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            label="rePassword"
            value={repassword}
            onChangeText={setrePassword}
            error={isError} 
          />
        </View>

        <View style={styles.signin}>
        <TouchableOpacity 
        loading={!loading} 
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={handleRegistration}>
          <Text style={styles.sign1}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.already}>
          <Text>Already Sign Up?</Text>
          <TouchableOpacity disable={loading} onPress={() => navigation.navigate('Login')}>
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
    backgroundColor: '#98E4FF'
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
  TextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 280,
    maxWidth: '80%',
    padding: 15,
    paddingBottom: 8,
    marginBottom: 20,
    backgroundColor: '#FFFF',
    borderRadius: 30
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
    borderColor: '#FFFF',
    marginBottom: 2,
    width: 200,
    borderRadius: 10,
    color: '#FFFF',
    fontSize: 20,
  },
  already: {
    flexDirection: 'row',
    marginTop: 8,
  },
});
