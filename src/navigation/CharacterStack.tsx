import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CharacterScreen, CharacterDetailsScreen } from '../screens';

const Stack = createNativeStackNavigator();

const CharacterStack = () => (
  <Stack.Navigator initialRouteName="Character" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Character" component={CharacterScreen} />
    <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} />
  </Stack.Navigator>
);

export default CharacterStack;
