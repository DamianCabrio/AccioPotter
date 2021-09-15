import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BookStack from './BookStack';
import CharacterStack from './CharacterStack';

import { colors } from '../utils/theme';
import { HistoryScreen } from '../screens';

type Route = RouteProp<Record<string, object | undefined>, string>;

const Tab = createBottomTabNavigator();

const getIconName = (routeName: string) => {
  let iconName = '';
  switch (routeName) {
    case 'BookTab':
      iconName = 'menu-book';
      break;
    case 'CharacterTab':
      iconName = 'badge';
      break;
    case 'HistoryTab':
      iconName = 'history';
      break;
    default:
      iconName = 'help-outline';
      break;
  }

  return iconName;
};

const navigatorScreenOptions = ({ route }: { route: Route }) => ({
  tabBarIcon: ({ color }: { focused: boolean; color: string; size: number }) => {
    const iconName = getIconName(route.name);
    return <MaterialIcon name={iconName} size={30} color={color} />;
  },
  tabBarAllowFontScaling: false,
  tabBarActiveTintColor: colors.yellow,
  tabBarInactiveTintColor: colors.yellow,
  tabBarStyle: {
    backgroundColor: colors.brown,
    height: 55,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tabBarLabelStyle: {
    fontSize: 11,
  },
  headerShown: false,
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions}>
      <Tab.Screen name="BookTab" component={BookStack} options={{ title: 'Books' }} />
      <Tab.Screen
        name="CharacterTab"
        component={CharacterStack}
        options={{ title: 'Characters' }}
      />
      <Tab.Screen name="HistoryTab" component={HistoryScreen} options={{ title: 'History' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
