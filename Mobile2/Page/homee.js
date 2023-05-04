import React from 'react';
import { View, StyleSheet, Text,Image ,TouchableOpacity } from 'react-native';




export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
        <Image
          source={require('../assets/images/background2.jpg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
  
  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List')}>
     <Text  style={styles.text2}>lets see our Cars</Text>
    </TouchableOpacity>
          <Image
            source={require('../assets/images/Logo.png')}
            style={styles.text}
          />
        
      </View>
    );
  };



const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    text:{
      marginLeft:50,
      marginTop:50,
      width:150,
      height:150,
      position: "absolute",
    },
    button: {
        backgroundColor: 'transparent',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 30,
      },
      text2: {
        color: '#948560',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
      },
  });
  