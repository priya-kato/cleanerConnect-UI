import {View, Text, Platform, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import ChatHeader from '../../../components/headers/chatHeader';
import {COLORS} from '../../../components/assets/color';
import ChatTextInput from '../../../components/mainForm/chatTextInput';
import {setAdjustResize, setAdjustNothing} from 'rn-android-keyboard-adjust';
import RenderChatView from './renderChatView';
export default function ChatScreen({navigation, route}) {
  const {item} = route?.params;
  const [text, setText] = useState('');
  useEffect(() => {
    if (Platform.OS === 'android') {
      setAdjustResize();
      return () => {
        setAdjustNothing();
      };
    }
  }, []);
  const messages = [
    {
      text: 'hiii',
      type: 'receive',
    },
    {
      text: 'hello',
      type: 'sender',
    },
    {
      text: 'hiii',
      type: 'receive',
    },
    {
      text: 'hiii',
      type: 'sender',
    },
    {
      text: 'hiii',
      type: 'receive',
    },
    {
      text: 'hello',
      type: 'sender',
    },
    {
      text: 'hiii',
      type: 'receive',
    },
    {
      text: 'hiii',
      type: 'sender',
    },
  ];
  const sendMessage = () => {
    const ws = new WebSocket('wss://ws://localhost:8080');

    ws.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.onmessage = event => {
      console.log('Received message:', event.data);
    };

    ws.onerror = error => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.backgroundColor}}>
      <ChatHeader headername={item?.firstname} navigation={navigation} />
      <FlatList
        data={messages}
        renderItem={({item}) => (
          <RenderChatView item={item} navigation={navigation} />
        )}
        keyExtractor={item => item._id}
        contentContainerStyle={{paddingBottom: 80}}
      />
      <ChatTextInput
        labelValue={text}
        onChangeText={text => setText(text)}
        placeholderText="Message"
        sendClick={sendMessage}
      />
    </View>
  );
}
