
import React , { useState, useEffect } from 'react';
import { View, StyleSheet, Text,TouchableOpacity, Button } from 'react-native';
import { ScrollView ,DatePickerIOS} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { SafeAreaView, Image} from 'react-native';
import List from './item';



    
export default function Cars({navigation}) {

  const [selectedCity, setSelectedCity] = React.useState();
  const [chosenDate, setChosenDate] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
 
  const onPressItem = (item) => {
    navigation.navigate('Details', { item });
  };
  
 const handleDateButtonPress = () => {
        setShowDatePicker(!showDatePicker);

   };
  const handleDateChange = (newDate) => {
    setChosenDate(newDate);
    setSelectedDate(newDate); 
    
  };


  const [ville, setVille] = React.useState([]);
  const [noms, setNoms] = React.useState([]);
  
  useEffect(() => {
    fetch('https://3f83-41-140-244-97.ngrok-free.app/ville/', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseData) => {
        setVille(responseData);
        setNoms(responseData.map((v) => ({ label: v.nom, value: v.id })));
      })
      .catch((error) => console.error(error));
  }, []);


  const [voiture, setvoiture] = React.useState([]);

  useEffect(() => {
    fetch(`https://3f83-41-140-244-97.ngrok-free.app/voiture`, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseData) => {
      setvoiture(responseData);
    })
    .catch((error) => console.error(error));
  }, []);

  const handleSelectCity = (selectedItem, index) => {
    setSelectedCity(selectedItem.value);
    console.log(selectedItem.value)
    if(selectedItem.value!=3){
      fetch(`https://3f83-41-140-244-97.ngrok-free.app/voiture/?modele=&marque=&prix_jour=&isdisponibilite=&nombre_siege=&ville=${selectedItem.value}&type=`, {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseData) => {
        setvoiture(responseData);
      })
      .catch((error) => console.error(error));
    }else{
      fetch(`https://3f83-41-140-244-97.ngrok-free.app/voiture`, {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((responseData) => {
        setvoiture(responseData);
      })
      .catch((error) => console.error(error));
    }

  };
  

  return (
   <View style={styles.bordy}> 
      <View style={styles.row}>   
      <SelectDropdown
          data={noms}
          onSelect={handleSelectCity}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.label;
          }}
          rowTextForSelection={(item, index) => {
            return item.label;
          }}
          dropdownStyle={styles.dropdownStyle}
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
  />
      <TouchableOpacity onPress={handleDateButtonPress}>
                              <View style={styles.button}>
                                <Text style={styles.buttonText}>Choose a date</Text>
                              </View>
         </TouchableOpacity>
      </View>
      {showDatePicker && (
              <DatePickerIOS date={chosenDate} mode="date" onDateChange={handleDateChange} />
         )}
    

        <View style={styles.list}>
                        <SafeAreaView style={styles.container}>
                        
                        <View style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                        
                        {voiture.map((item) => (
                            <List item={item}  navigation={navigation}
                            onPressItem={onPressItem}
                            />
                            
                          ))}
                         <View style={{
                          height:200,
                          width:300,
                         }}>
                          </View> 
                        </ScrollView>
                        </View>
                        </SafeAreaView>
                        
        </View>
     
   </View>
  );
}

const styles = StyleSheet.create({
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
    
    }, 
    logo:{
      position:'absolute',
      width:30,
      height:30,
      marginTop:10,
    },

  form:{
    backgroundColor:'red',
  marginTop:140,
    height:640,
    width:370,
    marginLeft:20,
    borderRadius:40,
    position:'absolute'
  },
    body:{
        backgroundColor: '#D4CCCC',
        flex:1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
          height:100,
          width:500,
          padding:20,
          marginTop:20,
      },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },  
    dropdownStyle: {
      backgroundColor: 'white',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 20,
    },
    buttonStyle: {
      width: 200,
      height: 40,
      backgroundColor: '#af9cda',
      borderRadius: 8,
      alignItems: 'center',
      borderRadius: 20,
      justifyContent: 'center',
      marginLeft:30,
      
    },
    buttonTextStyle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    }, button: {
        marginTop: 0,
        backgroundColor: '#af9cda',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderRadius:30,
        width:150,
      },
    
   
});





