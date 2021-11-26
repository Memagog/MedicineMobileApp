import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Analytics" component={Analytics} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Heal" component={Health} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({});

export default App;
