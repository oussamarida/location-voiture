import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Modal,
  Alert,
} from "react-native";
import {
  ScrollView,
  DatePickerIOS,
  SafeAreaView,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function DetailsScreen({ navigation, route }) {
  const [compte, setcompte] = React.useState([]);
  const { item, startDatee, endDate } = route.params;

  React.useEffect(() => {
    fetch(`https://1299-196-65-121-93.ngrok-free.app/client`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => {
        setcompte(responseData);
      })
      .catch((error) => console.error(error));
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const filtereduser = compte.filter(
      (car) => car.email === email && car.password === password
    );

    if (filtereduser.length > 0) {
      const data = {
        date_debut: startDatee,
        date_fin: endDate,
        voiture: item.id,
        client: filtereduser[0].id,
      };

      fetch("https://1299-196-65-121-93.ngrok-free.app/reservation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
      alert("We gona sent you email , thank u");
      setModalVisible(false);
      navigation.navigate('Home')
    } else {
      alert("Wrong email or password");
    }
  }; //sign

  const [em, setEmai] = useState("");
  const [passwor, setPasswordd] = useState("");

  const [name, setusername] = useState("");
  const [ag, setage] = useState("");

  
  const [refperm, setrefpermi] = useState("");

  function handleCardClick() {
    const data = {
      username: name,
      email: em,
      password: passwor,
      age: ag,
      date_permis: startDate,
      ref_permis: refperm,
    };
    console.log(name,em, passwor , ag , startDate ,refperm)
    fetch("https://1299-196-65-121-93.ngrok-free.app/client/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
      console.log(startDate)
    setModalVisible2(false);
    alert("your accont created please login to it to reserve");

    fetch(`https://1299-196-65-121-93.ngrok-free.app/client`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => {
        setcompte(responseData);
      })
      .catch((error) => console.error(error));
  }
  //
  //date

  const [startDate, setStartDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);

  const handleStartDateButtonPress = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(Platform.OS === "ios");
    setStartDate(currentDate.toISOString().slice(0, 10));
    console.log(startDate)
  };
  //
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/login.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login in</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible2(true)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalText}>Login</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
            <Button title="Login" style={styles.tet} onPress={handleLogin} />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible2(false)}>
              <Text style={styles.modalText}>Signe up</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={setEmai}
              value={em}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={setPasswordd}
              value={passwor}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="username"
              onChangeText={setusername}
              value={name}
            />
            <TextInput
              style={styles.input}
              placeholder="age"
              onChangeText={setage}
              value={ag}
              keyboardType="Number"
            />
            <TextInput
              style={styles.input}
              placeholder="ref permi"
              onChangeText={setrefpermi}
              value={refperm}
            />
            <TouchableOpacity style={{flexDirection: "row",}} onPress={() => setShowStartDatePicker(true)}>
            <Icon name="calendar-multiselect" style={styles.icon}></Icon>  
             <Text style={styles.modalText}>date permis</Text> 
            </TouchableOpacity>

            {showStartDatePicker && (
              <DateTimePicker
                testID="startDatePicker"
                value={new Date(startDate)}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={handleStartDateButtonPress}
              />
            )}
            <Button title="Sign up" style={styles.tet} onPress={handleCardClick} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
//onPress={() => setModalVisible(false)}   onPress={handleLogin}
const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
  },  icon: {
    color: "rgba(9,9,9,1)",
    fontSize: 30
  },
  buttons: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    marginTop: 590,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 5,
    borderRadius: 30,
    width: "70%",
    height: "50%",
    marginLeft: "16%",
    marginTop: 0,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
