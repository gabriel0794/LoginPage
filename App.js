import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './component/appstack';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
