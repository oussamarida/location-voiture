import React , { useState, useEffect } from 'react';
import { View, StyleSheet, Text,TouchableOpacity, Button } from 'react-native';
import { ScrollView ,DatePickerIOS} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { SafeAreaView, Image , TextInput,ImageBackground  } from 'react-native';


export default function DetailsScreen({ navigation ,route  }) {
  const [Nom, onChangeNom] = React.useState('');
  const [CNE, onChangeCNE] = React.useState('');
  const [num, onChangeNUM] = React.useState('');
  const [chosenDate, setChosenDate] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false); 
  const [selectedDate, setSelectedDate] = React.useState(null);
  const { item } = route.params;


  //date condition
  const yearDiff = new Date().getFullYear() - selectedDate?.getFullYear();



      const handleDateButtonPress = () => {
        setShowDatePicker(!showDatePicker);
      };
      const handleDateChange = (newDate) => {
        setChosenDate(newDate);
        setSelectedDate(newDate); 
      };

      
  const handleSubmit = () => {
    // Handle form submission here
    console.log(`Name: ${Nom}, CNE: ${CNE}, Date of Birth: ${chosenDate.getFullYear()}/${chosenDate.getMonth() + 1}/${chosenDate.getDate()}`);
  };
  const [noms, setNoms] = React.useState([]);
  
  useEffect(() => {
    fetch(`https://3f83-41-140-244-97.ngrok-free.app/type/?id=${item.type}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseData) => {
        setNoms(responseData);
      })
      .catch((error) => console.error(error));
  }, []);


    
    return (
      
      <View  style={{ flex: 1 , backgroundColor:'white', alignItems: 'center', }}>
          <ImageBackground 
        source={{ uri: 'https://w0.peakpx.com/wallpaper/440/206/HD-wallpaper-black-background-car-cars-vehicles.jpg' }}
        style={{ width: '100%', height: '100%', borderRadius: 40 }}
      ><View style={styles.card}>
      
            <View style={{ 
                        position :'absolute',
                        height:190,
                        width:250,
                        marginLeft:100,
                        }}>
                <Image source={{uri:item.photourl}}  style={styles.backgroundImage}/>            
                </View>
                <Text style={styles.Brand}>Brand</Text>
            <Text style={styles.Brands}>{item.marque}</Text>

            <Text style={styles.place }>Model</Text>
            <Text style={styles.loremIpsum2}>{item.modele}</Text>

            <Text style={styles.type}>type</Text>
            {noms.map(item => (
         <Text key={item.id} style={styles.types}>{item.nom}</Text>
      ))}

            <Text style={styles.mode}>Place</Text>
            <Text style={styles.model}>{item.nombre_siege}</Text>
           
        </View>
        
        <View style={styles.Body}>
              <TextInput
              style={styles.input}
              onChangeText={onChangeNom}
              value={Nom}
              placeholder="Nom"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNUM}
              value={num}
              placeholder="Numero"
            />      
             <TextInput
            style={styles.input}
            onChangeText={onChangeCNE}
            value={CNE}
            placeholder="CNE"
          />      
      <TouchableOpacity onPress={handleDateButtonPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Choose Date de naissance</Text>
          </View>
        </TouchableOpacity>
       
        {showDatePicker && (
             <View style={{backgroundColor:'grey' , marginLeft:60}}>
          <DatePickerIOS  date={chosenDate} mode="date" onDateChange={handleDateChange} />
          </View>
        )}
         {yearDiff >= 24 && (
            
              <Button  title="Submit"
              onPress={handleSubmit}
              color="white"
              accessibilityLabel="Submit the form"
              style={styles.button2} />
              
           )}
           
        </View>
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black !important',
    },
    button2: {
      marginTop: 40,
      backgroundColor: 'black',
      borderRadius: 10,
      padding: 10,
    },
    button: {
      marginTop: 20,
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      borderRadius:30,
      width:150,
    },
  
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
    },
    Body:{
      marginTop:10,
      width:350,
      height:450,
      borderRadius:40,
  },
    input: {
      backgroundColor:'white',
      borderRadius:30,
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    loremIpsum2:{
      color: "black",
      marginLeft:200,
      marginTop:220,
      position: "absolute",
      fontSize: 40
    },
    place:{
      color: "black",
      marginLeft:240,
      marginTop:260,
      position: "absolute",
      fontSize: 15
    },
    card:{
        backgroundColor:'white',
       marginTop:40,
      width:400,
      height:300,
      borderRadius:40
    },
    backgroundImage:{
      flex:1,
      width:300,
      height:460,
      marginTop:40,
     
    },
    type:{
      color: "black",
      marginLeft:30,
      marginTop:250,
      position: "absolute",
      fontSize: 15
    },
    types:{
      color: "black",
      marginLeft:20,
      marginTop:220,
      position: "absolute",
      fontSize: 30
    },
    Brand:{
      color: "black",
      marginLeft:30,
      marginTop:50,
      position: "absolute",
      fontSize: 15
    },
    Brands:{
      color: "black",
      marginLeft:20,
      marginTop:10,
      position: "absolute",
      fontSize: 40
    },
    model: {
      color: "black",
      marginLeft:30,
      marginTop:100,
      position: "absolute",
      fontSize: 50
    },
    mode: {
      color: "black",
      marginLeft:30,
      marginTop:150,
      position: "absolute",
      fontSize: 15
    },

  
  
  });