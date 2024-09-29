import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
const CartScreen = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <Button
        title="Check Out"
        onPress={() => navigation.navigate('PaymentSuccess')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcoral',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CartScreen;
