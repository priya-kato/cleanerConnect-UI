import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from '../../../components/form/formButton';
import FormInput from '../../../components/form/formInput';
import {COLORS} from '../../../components/assets/color';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (email && password) {
      try {
        const loggeduser = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        await AsyncStorage.setItem('authuser', email);
        navigation.navigate('private');
      } catch (e) {
        console.log(e, 'loginerr');
        alert('Invalid User');
      }
    } else {
      alert('Please enter valid inputs');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Connect app</Text>
      <FormInput
        value={email}
        placeholderText="Email"
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholderText="Password"
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton buttonTitle="Login" onPress={login} />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('signup')}>
        <Text style={styles.navButtonText}>New user? Join here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    color: COLORS.primary,
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 20,
    color: COLORS.primary,
  },
});
