// src/screens/PaymentSuccessScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaymentSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Success!</Text>
      <Button title="Continue Shopping" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default PaymentSuccessScreen;
