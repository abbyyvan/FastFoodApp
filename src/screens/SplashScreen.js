import React,{useEffect} from "react";
import {View, Text,StyleSheet} from 'react-native'


const SplashScreen =({navigation}) =>{


    useEffect(() =>{
        const timer = setTimeout(() => {
            navigation.replace('Home')
        }, 3000)
        return ()=> clearTimeout(timer)
    },[navigation])

    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Fast Food App</Text>
        </View>
    )




}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
      
    },
    title:{
        fontSize:40,
        color:'white',
        fontWeight: 'bold'
    }

})

export default SplashScreen