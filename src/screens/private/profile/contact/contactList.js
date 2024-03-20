import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../components/assets/color';
import {titleize} from '../../../../components/helpers/constants';
import {generateRandomColor} from '../../../../components/helpers/constants';
import SendSMS from 'react-native-sms';

const Contact = ({contact}) => {
  const backgroundColor = generateRandomColor();
  const bodySMS =
    'Please follow https://play.google.com/store/apps/details?id=app.bldg.explainer&hl=en_IN&gl=US';
  const initiateSMS = mobileNumber => {
    console.log(mobileNumber, 'phoneNumber');
    // Check for perfect 10 digit length
    if (mobileNumber?.length < 10) {
      alert('Please insert correct contact number');
      return;
    }

    SendSMS.send(
      {
        // Message body
        body: bodySMS,
        // Recipients Number
        recipients: [mobileNumber],
        // An array of types
        // "completed" response when using android
        successTypes: ['sent', 'queued'],
      },
      (completed, cancelled, error) => {
        if (completed) {
          console.log('SMS Sent Completed');
        } else if (cancelled) {
          console.log('SMS Sent Cancelled');
        } else if (error) {
          console.log('Some error occured');
        }
      },
    );
  };
  return (
    <TouchableOpacity
      style={styles.contactCon}
      onPress={() => initiateSMS(contact?.phoneNumbers[0]?.number)}>
      {contact?.givenName ? (
        <View style={styles.imgCon}>
          <View
            style={[{...styles.placeholder, backgroundColor: backgroundColor}]}>
            <Text style={styles.txt}>{titleize(contact?.givenName[0])}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.imgCon}>
          <View style={styles.placeholder}>
            <Text style={styles.txt}>-</Text>
          </View>
        </View>
      )}

      <View style={styles.contactDat}>
        <Text style={styles.name}>
          {contact?.givenName} {contact?.middleName && contact.middleName + ' '}
          {contact?.familyName}
        </Text>
        <Text style={styles.phoneNumber}>
          {contact?.phoneNumbers[0]?.number}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  contactCon: {flexDirection: 'row', marginVertical: 15, paddingHorizontal: 20},
  imgCon: {},
  placeholder: {
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  txt: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: '700',
  },
  name: {
    fontSize: 17,
    color: 'black',
  },
  phoneNumber: {
    color: '#888',
  },
});
export default memo(Contact);
