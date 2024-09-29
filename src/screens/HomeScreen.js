import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
      <Text>欢迎来到快餐订餐应用!</Text>
      <Button
        title="查看购物车"
        onPress={() => navigation.navigate('Cart')} // 这里使用传入的 navigation 对象
      />
    </View>
  );
};

export default HomeScreen;
