import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity, Dimensions  } from 'react-native';

import godofwar from '../../assets/img/godofwar1.png';


export default function Welcome() {
  return (
    <View style={styles.containerWelcome}>
      <StatusBar color="#fff"/>
      <ImageBackground source={godofwar} style = {styles.containerBackground} />
      <View style={styles.infoWelcomeContainer}>
        <Text style={styles.titleWelcome}>Figure Action Store</Text>
        <TouchableOpacity style={styles.containerButton}>
          <Text style={styles.textButton}>
              Go Store
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWelcome: {
    flex: 1,
    backgroundColor: '#010101',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  containerBackground:{
    flex: 1,
    resizeMode: "cover",
    width: '90%',
    height: '100%',
    position: 'absolute',
    right: '-10%',
    bottom: 0,
  },
  infoWelcomeContainer:{
    justifyContent: 'space-between',
    paddingTop: '10%',
    width: '80%',
    height: '80%'
  },
  titleWelcome: {
    fontFamily: 'Ubuntu_700Bold',
    color: '#fff',
    fontSize: 40,
    width: 200
  },
  containerButton: {
    backgroundColor: '#BF4A45',
    height: 55,
    borderRadius: 15,

    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton:{
    color: '#fff',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 17
  }
});
