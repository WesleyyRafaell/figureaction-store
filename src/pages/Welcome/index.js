import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar   } from 'react-native';

import godofwar from '../../assets/img/godofwar1.png';

export default function Welcome() {
  return (
    <View style={styles.containerWelcome}>
      <StatusBar color="#fff"/>
      <ImageBackground source={godofwar} style = {styles.containerBackground} />
      <Text style={styles.text}>Tela Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWelcome: {
    flex: 1,
    backgroundColor: '#010101',
  },
  containerBackground:{
    flex: 1,
    resizeMode: "cover",
    width: '90%',
    height: '100%',
    position: 'absolute',
    right: '-10%',
    bottom: 0,
    zIndex: 1
  },
  text: {
    fontFamily: 'Ubuntu_400Regular',
    color: '#fff'
  },
});
