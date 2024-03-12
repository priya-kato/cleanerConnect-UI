import {View, TouchableOpacity, Text, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screens/private/settings';
import UserScreen from '../screens/private/user';
import NotificationScreen from '../screens/private/notification';
import HistoryScreen from '../screens/private/history';
import ProfileScreen from '../screens/private/profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS} from '../components/assets/color';
import {IMAGES} from '../components/images';
import Cleanservice from '../screens/private/home/cleanservice';
import {MyTabs} from '.';
import ContactScreen from '../screens/private/profile/contact';
import ServiceListScreen from '../screens/private/home/serviceList';
import HistoryDetails from '../screens/private/history/historyDetails';
import CreateContact from '../screens/private/user/createContact';
import ChatScreen from '../screens/private/user/chatScreen';
import FindExperts from '../screens/private/experts';

const StackScreen = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => {
  const screen = [
    {name: 'Home', onPress: () => navigation.navigate('Homestack')},
    {
      name: 'Notification',
      onPress: () => navigation.navigate('Notificationtab'),
    },
    {
      name: 'Profile',
      onPress: () => {
        navigation.closeDrawer();
        navigation.navigate('Profile');
      },
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginVertical: 40,
        }}>
        <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 100,
            backgroundColor: COLORS.primary,
          }}>
          <Image
            style={{
              height: 80,
              width: 80,
              borderRadius: 100,
            }}
            source={IMAGES.profileImage}
          />
        </View>
      </View>
      {screen.map((item, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={item.onPress}
            style={{
              // backgroundColor: COLORS.backgroundColor,
              height: 60,
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <Text style={{color: COLORS.primary}}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const PrivateNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        },
      }}>
      <Drawer.Screen name="Home" component={MyTabs} />
      {/* <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} /> */}
    </Drawer.Navigator>
  );
};

export const PrivateStackNavigator = ({tabScreens}) => {
  const stackScreens = [
    {name: 'Drawer', component: PrivateNavigator},
    // {name: 'Home', component: tabScreens},
    {name: 'Profile', component: ProfileScreen},
    {name: 'Settingscreen', component: SettingScreen},
    {name: 'Userscreen', component: UserScreen},
    {name: 'Notificationscreen', component: NotificationScreen},
    {name: 'HistoryScreen', component: HistoryScreen},
    {name: 'CleanService', component: Cleanservice},
    {name: 'ContactScreen', component: ContactScreen},
    {name: 'ServiceListScreen', component: ServiceListScreen},
    {name: 'HistoryDetails', component: HistoryDetails},
    {name: 'CreateContact', component: CreateContact},
    {name: 'ChatScreen', component: ChatScreen},
    {name: 'FindExperts', component: FindExperts},
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
