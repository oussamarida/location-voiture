import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function HomeScreen({ navigation }) {
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const minDate = new Date();

  const handleStartDateButtonPress = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(Platform.OS === "ios");
    setStartDate(currentDate.toISOString().slice(0, 10));
  };

  const handleEndDateButtonPress = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(Platform.OS === "ios");
    setEndDate(currentDate.toISOString().slice(0, 10));
  };

  //date

  const [selectedCity, setSelectedCity] = useState("");

  const handleSelectCity = (selectedItem, index) => {
    setSelectedCity(selectedItem.value);
  };

  const [ville, setVille] = React.useState([]);
  const [noms, setNoms] = React.useState([]);

  useEffect(() => {
    fetch("https://1299-196-65-121-93.ngrok-free.app/ville/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => {
        setVille(responseData);
        setNoms(responseData.map((v) => ({ label: v.nom, value: v.id })));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/background2.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
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
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>date debut</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Select End Date</Text>
          </View>
        </TouchableOpacity>
      </View>
      {showStartDatePicker && (
        <DateTimePicker
          testID="startDatePicker"
          value={new Date(startDate)}
          mode="date"
          is24Hour={true}
          display="default"
          minimumDate={minDate}
          onChange={handleStartDateButtonPress}
        />
      )}
      {showEndDatePicker && (
        <DateTimePicker
          testID="endDatePicker"
          value={new Date(endDate)}
          mode="date"
          is24Hour={true}
          display="default"
          minimumDate={minDate}
          onChange={handleEndDateButtonPress}
        />
      )}
      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          if (selectedCity && startDate && endDate) {
            navigation.navigate("List", {
              city: selectedCity,
              startDate: startDate,
              endDate: endDate,
            });
            console.log(selectedCity, startDate, endDate);
          } else {
            alert("chosee ville and date ");
            console.log(selectedCity, startDate, endDate);
          }
        }}
      >
        <Text style={styles.text2}>search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 100,
    paddingLeft: 100,
    paddingRight: 100,
  },
  dropdownStyle: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonStyle: {
    width: 200,
    height: 40,
    backgroundColor: "black",
    borderRadius: 8,
    borderRadius: 20,
    marginLeft: 30,
    width: 250,
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 100,
    width: 500,
    marginLeft: 100,
    padding: 20,
    marginTop: 20,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  text: {
    marginLeft: 50,
    marginTop: 50,
    width: 150,
    height: 150,
    position: "absolute",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  button2: {
    marginTop: 0,
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderRadius: 30,
    width: 150,
    height: 50,
  },
  button: {
    marginTop: 0,
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderRadius: 30,
    width: 150,
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  text2: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
