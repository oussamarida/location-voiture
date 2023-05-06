import { Button } from "react-native";
import * as React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import { Component } from "react";
import { useState, useEffect } from "react";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Entypo";
import Icon4 from "react-native-vector-icons/EvilIcons";

export default function List({ item, navigation, onPressItem }) {
  const [noms, setNoms] = React.useState([]);

  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={() => onPressItem(item)}>
          <View style={styles.row}>
              <View style={styles.side1}>
                  <View style={styles.item}>
                  <Icon name="airline-seat-legroom-extra" style={styles.icon}></Icon>
                    <Text style={styles.text}>{item.nombre_siege} </Text>
                  </View>
                  <View style={styles.item}>
                  <Icon3 name="blackboard" style={styles.icon}></Icon3>
                  <Text style={styles.text}>{item.nbr_bagage} </Text>
                  </View>
                  <View style={styles.item}>
                  <Icon2 name="door" style={styles.icon}></Icon2>
                  <Text style={styles.text}>{item.nbr_portes} </Text>
                  </View>
                  <View style={styles.item}>
                  <Icon2 name="air-conditioner" style={styles.icon}></Icon2>
                  <Text style={styles.text}>{item.climatise} </Text>
                  </View>
                  <View style={styles.item}>
                  <Icon4 name="gear" style={styles.icon}></Icon4>
                  <Text style={styles.text}>{item.manuelle} </Text>
                  </View>
              </View>
              <View style={styles.side2}>
                <View  style={styles.boximage}><Image source={{uri:item.photourl}} style={styles.backgroundImage}/></View>
                <View  style={styles.boxPrice}>
                <Text style={styles.titre}>{item.nom}</Text>   
              <Text style={styles.priceT}><Text style={{color:"gray" ,  fontSize: 20}}>Price:</Text>{item.prix_jour}DH/j</Text>   
              </View>
              </View>
          </View>
       
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    shadowColor:"red",
    shadowOpacity:1,
    shadowRadius: 5,
  },row:{
    flex:1,
    margin:10,
    backgroundColor:"white",
    height:290,
    borderRadius:10,
    flexDirection: "row",
  },side1:{
      flex: 1.5,
      flexDirection: "column",
  },side2:{
      flex: 3,
      flexDirection: "column",
  },boximage:{
    flex:3,
  },backgroundImage:{
    marginTop:20,
    marginLeft:10,
    height:"67%",
    width:"100%"
  },boxPrice:{
    flex: 1,
    justifyContent:"center"
  },priceT:{
    color: "rgba(247,247,247,1)",
    fontSize: 25,
    color:'black',
    fontWeight:'bold',
    marginLeft:30,
},item:{
  padding:10,
  flex: 1,
  flexDirection: "row",
},titre:{
  color:'black',
  marginLeft:30,
  fontSize: 15,
  fontWeight:'bold',
},
text:{
  flex:1,
  fontWeight:'bold',
}, icon: {
  color: "rgba(128,128,128,1)",
  fontSize: 25
}
 
});
