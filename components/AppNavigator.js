import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import About from '../screens/About';
import Age from '../screens/individual/Age';
import Ancestry from '../screens/individual/Ancestry';
import Eyes from '../screens/individual/Eyes';
import Health from '../screens/individual/Health';
import Diseases from '../screens/individual/Health/Diseases';
import Crohn from '../screens/individual/Health/Crohn';
import Heart from '../screens/individual/Health/Heart';
import Ovarian from '../screens/individual/Health/Ovarian';
import Landing from '../screens/individual/Landing';
import Smoking from '../screens/individual/Smoking';
import Variant from '../screens/individual/Variant';

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
          name="Crohn"
          component={Crohn}
          initialParams={{ name: 'stephan' }}
        />
        <Stack.Screen
          name="Heart"
          component={Heart}
          initialParams={{ name: 'stephan' }}
        />
        <Stack.Screen
          name="Ovarian"
          component={Ovarian}
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
