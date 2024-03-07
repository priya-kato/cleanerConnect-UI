import {View, Text} from 'react-native';
import React from 'react';
import LoginScreen from '../screens/public/auth/loginScreen';
import SignupScreen from '../screens/public/auth/signUpScreen';
const StackScreen = createNativeStackNavigator();
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const PublicNavigation = () => {
  const stackScreens = [
    {name: 'Login', component: LoginScreen},
    {name: 'signup', component: SignupScreen},
  ];
  return (
    <StackScreen.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      {stackScreens.map((item, i) => {
        return (
          <StackScreen.Screen
            options={{tabBarVisible: true}}
            key={i}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </StackScreen.Navigator>
  );
};
