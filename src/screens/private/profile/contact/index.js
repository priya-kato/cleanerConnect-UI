import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet, TextInput} from 'react-native';
import Contacts from 'react-native-contacts';
import Contact from './contactList';
import Header from '../../../../components/headers/header';
import {COLORS} from '../../../../components/assets/color';

const ContactScreen = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    Contacts.getAll().then(contacts => {
      setContacts(contacts);
    });
  }, []);
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    return <Contact contact={item} />;
  };
  return (
    <View style={{flex: 1}}>
      <Header
        name="Refer Friends"
        navigation={navigation}
        backColor={COLORS.primary}
      />
      <TextInput
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
        style={{
          borderWidth: 0.8,
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 10,
          paddingHorizontal: 20,
          borderColor: 'pink',
        }}
        placeholderTextColor="black"
        color={COLORS.primary}
      />
      <FlatList
        data={contacts.filter(contact =>
          contact?.givenName?.toLowerCase().includes(searchText?.toLowerCase()),
        )}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.list}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
export default ContactScreen;
