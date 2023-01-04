import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import About from '../screens/About';
import Age from '../screens/Individual/Age';
import Ancestry from '../screens/Individual/Ancestry';
import Eyes from '../screens/Individual/Eyes';
import Health from '../screens/Individual/Health';
import Diseases from '../screens/Individual/Health/Diseases';
import Landing from '../screens/Individual/Landing';
import Smoking from '../screens/Individual/Smoking';
import Variant from '../screens/Individual/Variant';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen
          name="Variant"
          component={Variant}
          initialParams={{ name: 'stephan' }}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          initialParams={{ name: 'stephan' }}
        />

        <Stack.Screen
          name="Ancestry"
          component={Ancestry}
          initialParams={{ name: 'stephan' }}
        />
        <Stack.Screen
          name="Age"
          component={Age}
          initialParams={{ name: 'stephan' }}
        />
        <Stack.Screen
          name="Eyes"
          component={Eyes}
          initialParams={{ name: 'stephan' }}
        />
        <Stack.Screen
          name="Health"
          component={Health}
          initialParams={{ name: 'stephan' }}
        />
        <Stack.Screen
          name="Smoking"
          component={Smoking}
          initialParams={{ name: 'stephan' }}
        />
        <Stack.Screen
          name="Diseases"
          component={Diseases}
          initialParams={{ name: 'stephan' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
