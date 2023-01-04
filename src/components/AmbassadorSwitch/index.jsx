import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Select, SelectItem, } from '@ui-kitten/components';
import { useNavigation, useRoute, CommonActions } from '@react-navigation/native';
import FastImage from '@cuvent/react-native-fast-image';

import HorizontalSwitch from './HorizontalSwitch'
import VerticalSwitch from './VerticalSwitch'

import DataContext from '../../Context/DataContext';

const AmbassadorSwitch = (props) => {
  const layout = 'horizontal'
  return (
    <>
      { layout == 'horizontal' ? <HorizontalSwitch/> : <VerticalSwitch/> }
    </>
  );
};

export default AmbassadorSwitch;
