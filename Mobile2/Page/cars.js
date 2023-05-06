import React, { useState, useEffect, cloneElement } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { ScrollView, DatePickerIOS } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { SafeAreaView, Image } from "react-native";
import List from "./item";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Cars({ navigation, route }) {
  const { city, startDate, endDate } = route.params;

  const onPressItem = (item) => {
    navigation.navigate("Details", { item });
  };

  const [resvoiture, setResvoiture] = useState([]);
  const [voiture, setvoiture] = useState([]);
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    fetch(
      `https://1299-196-65-121-93.ngrok-free.app/voiture/?nom=&prix_jour=&nombre_siege=&nbr_bagage=&nbr_portes=&climatise=&manuelle=&photourl=&ville=${city}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        setvoiture(responseData);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`https://1299-196-65-121-93.ngrok-free.app/reservation`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => {
        setReservation(responseData);
      })
      .catch((error) => console.error(error));
  }, [voiture]);

  useEffect(() => {
    const filteredreservation = reservation.filter(
      (res) =>
        (Date.parse(res.date_debut) >= Date.parse(startDate) &&
          Date.parse(res.date_debut) <= Date.parse(endDate)) ||
        (Date.parse(res.date_fin) >= Date.parse(startDate) &&
          Date.parse(res.date_fin) <= Date.parse(endDate))
    );
    const data = voiture.filter(
      (car) => !filteredreservation.some((res) => res.voiture === car.id)
    );
    setResvoiture(data);
  }, [reservation]);

  return (
    <View style={styles.body}>
      <View style={styles.list}>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
              {voiture.map((item) => (
                <List
                key={item.id}
                  item={item}
                  navigation={navigation}
                  onPressItem={onPressItem}
                />
              ))}
              <View
                style={{
                  height: 200,
                  width: 300,
                }}
              ></View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Imae: {
    position: "absolute",
    height: 130,
    width: 190,
    marginLeft: 190,
  },
  backgroundImage: {
    flex: 1,
    width: 300,
    height: 460,
  },

  logo: {
    position: "absolute",
    width: 30,
    height: 30,
    marginTop: 10,
  },

  form: {
    backgroundColor: "red",
    marginTop: 140,
    height: 640,
    width: 370,
    marginLeft: 20,
    borderRadius: 40,
    position: "absolute",
  },
  body: {
    backgroundColor: "#2C2B2B",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 100,
    width: 500,
    marginLeft: 20,
    padding: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
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
    backgroundColor: "#af9cda",
    borderRadius: 8,
    borderRadius: 20,
    marginLeft: 100,
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    marginTop: 0,
    backgroundColor: "#af9cda",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderRadius: 30,
    width: 150,
    marginLeft: 10,
  },
});
