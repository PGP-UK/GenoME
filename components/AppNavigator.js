import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import About from '../screens/About';
import Age from '../screens/individual/Age';
import Ancestry from '../screens/individual/Ancestry';
import Eyes from '../screens/individual/Eyes';
import Health from '../screens/individual/Health';
import Landing from '../screens/individual/Landing';
import Smoking from '../screens/individual/Smoking';
import Variant from '../screens/individual/Variant';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />

        <Stack.Screen
          name='Variant'
          component={Variant}
          initialParams={{ name: 'Stephan' }}
        />
        <Stack.Screen
          name='Landing'
          component={Landing}
          initialParams={{ name: 'Stephan' }}
        />

        <Stack.Screen
          name='Ancestry'
          component={Ancestry}
          initialParams={{ name: 'Stephan' }}
        />
        <Stack.Screen
          name='Age'
          component={Age}
          initialParams={{ name: 'Stephan' }}
        />
        <Stack.Screen
          name='Eyes'
          component={Eyes}
          initialParams={{ name: 'Stephan' }}
        />
        <Stack.Screen
          name='Health'
          component={Health}
          initialParams={{ name: 'Stephan' }}
        />
        <Stack.Screen
          name='Smoking'
          component={Smoking}
          initialParams={{ name: 'Stephan' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
