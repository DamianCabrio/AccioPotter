import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
  </Stack.Navigator>
);

export default MainNavigator;
