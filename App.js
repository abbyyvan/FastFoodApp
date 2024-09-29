import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import { enableScreens } from 'react-native-screens'; 
import PaymentSuccessScreen from './src/screens/PaymentSuccessScreen';
enableScreens(); 
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{ title: 'Cart' }} 
        />
         <Stack.Screen 
          name="PaymentSuccess" 
          component={PaymentSuccessScreen} 
          options={{ title: 'Success!' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
