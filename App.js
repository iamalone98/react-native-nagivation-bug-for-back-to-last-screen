import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ROOT = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0,5,255,0.3)',
};

const HomeStack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={ROOT}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={{ margin: 20, padding: 20, backgroundColor: 'white' }}>
        <Text>Go Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProfileScreen = () => (
  <View style={ROOT}>
    <Text>Profile</Text>
    <TextInput value="some text...." />
  </View>
);

export const App = () => (
  <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Profile" component={ProfileScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  </KeyboardAvoidingView>
);
