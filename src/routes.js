import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts }  from 'expo-font';
import { Ubuntu_400Regular, Ubuntu_700Bold  } from '@expo-google-fonts/ubuntu';


const Stack = createStackNavigator();


// components
import Welcome from './pages/Welcome';

export default function Routes(){
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular, 
    Ubuntu_700Bold
  })

  if (!fontsLoaded) {
      return null;
  }
  
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}