import React from "react";
import{ StatusBar, Text, View } from "react-native";
import {widthPercentageToDP as W, heightPercentageToDP as H} from 'react-native-responsive-screen';
import Login from"./src/screens/Login"
const My_first_app=()=>{
  return(
    <View style={{
      flex:1,
      
     }}>
      <StatusBar hidden={true}/>
    <Login/>
       
    </View>
    
  )

};
export default My_first_app;