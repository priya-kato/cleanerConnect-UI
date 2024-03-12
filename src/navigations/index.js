import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../components/assets/color';
import {
  BottomHomeIcon,
  BottomUserIcon,
  BottomSettingIcon,
  BottomAppointmentIcon,
  NotificationIcon,
} from '../components/vectors';
import SettingScreen from '../screens/private/settings';
import UserScreen from '../screens/private/user';
import NotificationScreen from '../screens/private/notification';
import HistoryScreen from '../screens/private/history';
import {PrivateStackNavigator} from './privateNavigation';
import {PublicNavigation} from './publicNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/private/home';
import SplashScreen from '../screens/public/auth/splashScreen';

const Tab = createBottomTabNavigator();
const tabScreens = [
  {
    name: 'Homestack',
    component: HomeScreen,
    activeIcon: <BottomHomeIcon fill={COLORS.primary} />,
    inActiveIcon: <BottomHomeIcon />,
  },
  {
    name: 'Settingtab',
    component: SettingScreen,
    activeIcon: <BottomUserIcon fill={COLORS.primary} />,
    inActiveIcon: <BottomUserIcon />,
  },
  {
    name: 'Usertab',
    component: UserScreen,
    activeIcon: <BottomSettingIcon stroke={COLORS.primary} />,
    inActiveIcon: <BottomSettingIcon />,
  },
  {
    name: 'Historytab',
    component: HistoryScreen,
    activeIcon: <BottomAppointmentIcon stroke={COLORS.primary} />,
    inActiveIcon: <BottomAppointmentIcon />,
  },
  {
    name: 'Notificationtab',
    component: NotificationScreen,
    activeIcon: <NotificationIcon stroke={COLORS.primary} />,
    inActiveIcon: <NotificationIcon stroke={COLORS.white} />,
  },
];
const StackScreen = createNativeStackNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
          display: 'none',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.primary,
        },
      }}>
      {tabScreens.map((item, i) => {
        return (
          <Tab.Screen
            key={i}
            name={item.name}
            component={item.component}
            options={() => ({
              // tabBarStyle: {display: 'none'},
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View>
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: focused ? COLORS.backgroundColor : null,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {focused ? item.activeIcon : item.inActiveIcon}
                  </View>
                </View>
              ),
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.backgroundColor}}>
      <NavigationContainer>
        <StackScreen.Navigator
          initialRouteName="splash"
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}>
          <StackScreen.Screen
            options={{tabBarVisible: true}}
            name="splash"
            component={SplashScreen}
          />
          <StackScreen.Screen
            options={{tabBarVisible: true}}
            name="private"
            component={PrivateStackNavigator}
          />
          <StackScreen.Screen
            options={{tabBarVisible: true}}
            name="public"
            component={PublicNavigation}
          />
        </StackScreen.Navigator>
      </NavigationContainer>
    </View>
  );
}
