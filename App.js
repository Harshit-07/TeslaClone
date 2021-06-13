import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View,Dimensions } from 'react-native';
import CarList from './Components/Carlist';
import Header from './Components/Header';

export default function App() {
  return (
    <View style={style.container}>
      <Header />
      {/* <CarItem name={"Model S"} tag={"Starting at 69,000$"} image={require("./assets/ModelS.jpeg")}/> */}
      {/* <CarItem name={"Model X"} tag={"Order Online for"} subtag={"Touchless Delivery"} image={require("./assets/ModelX.jpeg")}/> */}
      <CarList />

      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
