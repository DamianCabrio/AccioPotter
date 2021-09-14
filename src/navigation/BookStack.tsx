import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BookScreen, BookDetailsScreen } from '../screens';

const Stack = createNativeStackNavigator();

const BookStack = () => (
  <Stack.Navigator initialRouteName="Book" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Book" component={BookScreen} />
    <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
  </Stack.Navigator>
);

export default BookStack;
