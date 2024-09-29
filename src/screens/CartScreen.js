import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
const CartScreen = ({navigation} ) => {
    // const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightcoral' }}>
      <Text>购物车页面</Text>
      <Button title="查看购物车" onPress={() => navigation.navigate('PaymentSuccess')} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
  });

  
export default CartScreen;
