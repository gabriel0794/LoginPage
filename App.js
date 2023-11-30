import { StyleSheet, Text, View, Image } from 'react-native';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import AccountRecovery from './screens/accountRecovery';
import LandingScreen from './screens/landingScreen';
import HomeScreen from './screens/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={LandingScreen} name="Landing" options={{headerShown:false}}/>
        <Stack.Screen component={LoginScreen} name="Login" options={{headerShown:false}}/>
        <Stack.Screen component={HomeScreen} name="Home" options={{headerShown:false}}/>
        <Stack.Screen component={RegisterScreen} name="Register" options={{headerShown:false}}/>
        <Stack.Screen component={AccountRecovery} name="Recovery" options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}
