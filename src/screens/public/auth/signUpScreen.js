import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../../../components/form/formButton';
import FormInput from '../../../components/form/formInput';
import {COLORS} from '../../../components/assets/color';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signup = async () => {
    if (email && password) {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        await AsyncStorage.setItem('authuser', email);
        navigation.navigate('private');
      } catch (e) {
        console.log(e, 'siguperr');
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
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
      <FormButton buttonTitle="Signup" onPress={signup} />
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
});
