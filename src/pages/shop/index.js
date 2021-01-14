import React, {useState, useEffect} from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, Image, Dimensions  } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation  } from '@react-navigation/native';

import dataJson from '../../data.json';

export default function Shop() {
  const [category, setCategory] = useState();
  const [actions, setActions] = useState([]);

  useEffect(()=> {
    const nameCategory = dataJson.data.map(item => item.nameCategory);
    const objectCategory = nameCategory.map(item => (
      {
        "name": item,
        "active": false
      }
    ))

    objectCategory[0].active = true;

    setCategory(objectCategory);
  },[]);

  useEffect(()=> {
    const figures = returnArrayOfObjectsFigures(dataJson.data);

    setActions(figures);
  }, [])

  function returnArrayOfObjectsFigures(array){
    const actionsObject = [];

    array.forEach(item => (
      item.actions.forEach(item => {
        actionsObject.push(item)
      })
    ));

    return actionsObject;
  }


  function handleActiveItem(index){
    const categoryReseted = category.map(item => (
      {
        "name": item.name,
        "active": false
      }
    ));
    categoryReseted[index].active = true;
    
    handleActiveCategoryActions(categoryReseted[index].name);
    setCategory(categoryReseted);
  }

  function handleActiveCategoryActions(nameItem){
    const figures = returnArrayOfObjectsFigures(dataJson.data);

    const newCategory = figures.filter(item => item.category === nameItem);
    setActions(newCategory);
  }

  const navigation = useNavigation();

  function handleNavigateToWelcome(){
    navigation.navigate('Welcome')
  }
  
  if(!category || !actions){
    return (
      <View style={styles.loading}>
        <Text>Carregando...</Text>
      </View>
    )
  }
  return (
    <View style={styles.containeShop}>
      <StatusBar color="#fff"/>
      <View style={styles.header}>
        <View style={styles.headerIconsContainer}>
          <TouchableOpacity onPress={handleNavigateToWelcome}>
            <AntDesign name="arrowleft" size={30} color="#fff" />
          </TouchableOpacity>
          <FontAwesome name="shopping-cart" size={30} color="#fff" />
        </View>
        <Text style={styles.headerText}>Explore</Text>
        <Text style={styles.headerTextSpan}>Figure Actions</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.scrollButtonsCategory}>
          <ScrollView horizontal >
            {category.map(({name, active}, index) => (
              <RectButton
                key={name} 
                onPress={() => handleActiveItem(index)} 
                style={active ? [styles.buttonsCategory, styles.buttonsCategoryActive] : styles.buttonsCategory}>
                <Text style={styles.textButton}>{name}</Text>
              </RectButton>
            ))}
          </ScrollView>
        </View>
        <View style={styles.containerActionsFigure}>
          <ScrollView horizontal>
            {actions.map(({title, from, price, picture}) => (
              <View style={styles.actionFigure} key={title}>
                  <Image style={styles.imageFigure} source={{uri: picture}} />
                  <View style={styles.descriptionFigure}>
                    <Text style={[styles.nameFigure, styles.textStyle]}>{title}</Text>
                    <Text style={[styles.game, styles.textStyle]}>{from}</Text>
                    <Text style={styles.priceFigure}>R$ {price}</Text>
                  </View>
              </View>
            ))} 
          </ScrollView>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  loading:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010101',
  },
  containeShop:{
    flex: 1,
    backgroundColor: '#010101',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20
  },
  headerIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 45
  },
  headerText:{
    color:"#fff",
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 26,
  },
  headerTextSpan:{
    color:"#fff",
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 26,
  },
  main:{
    flex: 1,
    backgroundColor: '#2E2F33',
    marginTop: 40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: 25,
    paddingHorizontal: 20
  },
  scrollButtonsCategory:{
    height: 48
  },  
  buttonsCategory:{
    width: 100,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
    
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsCategoryActive:{
    backgroundColor: '#BF4A45',
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Ubuntu_400Regular'
  },
  containerActionsFigure: {
    marginTop: 18,
    height: 260
  },
  actionFigure: {
    width: 140,
    alignItems: 'center',
    marginRight: 30,
  },
  imageFigure:{
    position: 'relative',
    zIndex: 1,
    width: 100,
    height: 120
  },
  descriptionFigure:{
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 20,
    marginTop: -40,
    paddingTop: 45,
    paddingBottom: 20,

    alignItems: 'center'
  },
  textStyle:{
    color: '#2E2F33',
    fontFamily: 'Ubuntu_700Bold',
    textAlign: 'center'
  },
  nameFigure: {
    fontSize: 17
  },
  game: {
    fontSize: 12
  },
  priceFigure: {
    color: '#010101',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 18,
    marginTop: 10
  }
})