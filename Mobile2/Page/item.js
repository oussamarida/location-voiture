import { Button} from 'react-native';
import * as React from 'react';
import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native';
import { SafeAreaView,  ScrollView} from 'react-native';
import  { Component } from "react";
import  { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';



export default function List({ item, navigation,onPressItem }) {

  const [noms, setNoms] = React.useState([]);
  
  useEffect(() => {
    fetch(`https://b137-41-141-219-246.ngrok-free.app/type/?id=${item.type}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseData) => {
        setNoms(responseData);
      })
      .catch((error) => console.error(error));
  }, []);



    return (
      
      <View style={styles}>
  <TouchableOpacity    
        onPress={() => onPressItem(item) }
       > 
      <View style={styles.List}>
      <Text style={styles.bmw}>{item.marque}</Text>
      <Text style={styles.model}>( {item.modele} )</Text>
      {noms.map(item => (
         <Text key={item.id} style={styles.essence}>{item.nom}</Text>
      ))}
      <Text style={styles.loremIpsum2}>{item.nombre_siege}</Text>
      <View style={{ 
              position :'absolute',
              height:30,
              width:30,
              marginLeft:270,
              marginTop:60,
              }}>
      <Image source={require('../assets/images/porte.png')}style={styles.logo}/>  
      </View>
      <View style={{ 
              position :'absolute',
              height:30,
              width:30,
              marginLeft:120,
              marginTop:60,
              }}>
      <Image source={require('../assets/images/essens.png')} style={styles.logo}/>  
      </View>
      </View>

              <Text style={styles.priceT}>{item.prix_jour} $</Text>   
      <View style={{ 
              position :'absolute',
              height:160,
              width:300,
              marginLeft:65,
              }}>
      <Image source={{uri:item.photourl}} style={styles.backgroundImage}/>  
            

      </View>
             
      </TouchableOpacity>
</View>


 
    );
  }
  

  
const styles = StyleSheet.create({

  
    List:{
      shadowOpacity:200,
      backgroundColor: '#EAEAE2',
        marginTop:60,
          margin:30,
          height:210,
          width:355,
          borderRadius:30,
      },
      scrollView: {
        backgroundColor: 'transparent',
      }, 
      logo:{
        width:30,
        height:30,
        marginTop:100,
      },
      Imae:{   
      position :'absolute',
      height:130,
      width:190,
      marginLeft:190,
  },
   backgroundImage:{
      flex:1,
      width:300,
      height:460,
      marginTop:20,
    },
    priceT:{
        color: "rgba(247,247,247,1)",
        fontSize: 25,
        marginTop:5,
        position:'absolute',
        marginLeft:260,
        marginTop:150,
        color:'blue'
    },
    bmw:{
        color: "rgba(247,247,247,1)",
        fontSize: 25,
        marginTop:5,
        position:'absolute',
        marginLeft:50,
        marginTop:90,
        color:'black'
    },model:{
        color: "rgba(247,247,247,1)",
        fontSize: 25,
        marginTop:5,
        position:'absolute',
        marginLeft:120,
        marginTop:90,
        color:'black'
    },
    essence:{
        color: "rgba(247,247,247,1)",
        fontSize: 20,
        marginTop:5,
        position:'absolute',
        marginLeft:60,
        marginTop:160,
         color: "#121212"
    },
    loremIpsum2:{
        color: "rgba(247,247,247,1)",
        fontSize: 25,
        marginTop:5,
        position:'absolute',
        marginLeft:250,
        marginTop:160,
        color:'black'
    }
});
