// src/screens/PaymentSuccessScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaymentSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>付款成功!</Text>
      <Button title="返回首页" onPress={() => navigation.navigate('Home')} />
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
