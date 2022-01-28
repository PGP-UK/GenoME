import React from 'react';
import { StyleSheet, View, Image, ImageBackground, Pressable } from 'react-native';
import { Text, Button, Layout } from '@ui-kitten/components';

import { Section, Block, Grid } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';


import PageLayout from '../components/PageLayout';
import HeaderRow from './individual/About/HeaderRow';
import SocialMedia from './individual/About/SocialMedia';
import logError from 'react-native/Libraries/Utilities/logError';

const About = (props) => {
  const { navigation } = props;
  return (
    <>
      <PageLayout>
       <HeaderRow navigation={navigation} />
        <Text category="p1" style={styles.main_text}>
          The PGP-UK project is part of the global network of Personal Genome Projects, which all share
          the vision of advancing science through open data sharing. Currently, there are projects in America,
          Austria, Canada, China and the UK. There are multiple ways to join the PGP-UK community and keep-up-date 
          with the project - just follow the links.
        </Text>

       <SocialMedia navigation={navigation} />

        <ImageBackground style={styles.bottomImage} source={require("../assets/images/about_us/more-information_globe.png")} >
          
          <Text category="p1" style={styles.bottom_red_text}>
            DISCLAIMER: The generation of genomic data is not an error-free process and our analysis system is 
            still under development. becasue the body of knowledge of genetic and epigenetic variants has many 
            uncertainties, we cannot guarantee that our analyses are either accurate or complete. 
          </Text>
          
          <Text style={styles.bottom_text}>
            This app was designed and developed by the PGP-UK/GenoME team.
          </Text>
        </ImageBackground>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({

  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom:20,
  },

  bottom_text: {
    color: '#666E7A',
    fontSize: 10,
    marginBottom: 20,
  },

  bottom_red_text: {
    color: '#ff0000',
    fontSize: 10,
    marginBottom: 20,
  },

  bottomImage:{
    height: 225,
    width: 350,
    marginTop: 20,
    justifyContent:"flex-end"
  },

  socialMedia:{
    marginTop: 20,
    marginBottom: 25,
  },

  socialMediaLogo: {
    width: 50,
    height: 50,  
  },
  
});

export default About;