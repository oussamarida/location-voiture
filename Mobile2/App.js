import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Page/homee';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cars from './Page/cars';
import SelectDropdown from 'react-native-select-dropdown'
import DetailsScreen from './Page/detail';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome',  headerStyle: {
          backgroundColor: '#c6d0cf',
          
        },  statusBarColor: '#262221', headerTintColor: '#948560',
        
        
        }}
      />
      <Stack.Screen
      options={{title: 'CHOOSE YOUR CAR'}}
      name="List" component={Cars} />
        <Stack.Screen 
          options={{headerShown: false }}
        name="Details" 
        component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
                                           
});
