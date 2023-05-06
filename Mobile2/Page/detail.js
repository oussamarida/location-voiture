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
       
      </View>
    );
  }

  const styles = StyleSheet.create({

  });