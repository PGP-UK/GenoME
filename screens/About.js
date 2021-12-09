import React from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { Text } from '@ui-kitten/components';
import PageLayout from '../components/PageLayout';
import { Section, Block, Grid } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { TextStyleProps } from '@ui-kitten/components/devsupport';


const BackBtn = ({ layoutStyle, navigation }) => (
  <Layout style={layoutStyle}>
    <Button
      size="small"
      status="primary"
      style={styles.headerBtn}
      onPress={() => navigation.navigate('Home/Index.js')}>
      BACK
    </Button>
  </Layout>
);

const About = () => {
  return (
    <>
      <PageLayout>
        <Text category="h1" style={styles.header}>
          About PGP-UK and the global network of Personal Genome Projects
        </Text>

        <Text category="p1" style={styles.main_text}>
          The PGP-UK project is part of the global network of Personal Genome Projects, which all share
          the vision of advancing science through open data sharing. Currently, there are projects in America,
          Austria, Canada, China and the UK. There are multiple ways to join the PGP-UK community and keep-up-date 
          with the project - just follow the links.
        </Text>

        <Text>Twitter</Text>
        <Image 
                style={styles.socialMediaLogo}
                source={require('../assets/images/about_us/more-information_twitter.png')}
            /> 
        <Text>Blogs</Text>
        <Image 
                style={styles.socialMediaLogo}
                source={require('../assets/images/about_us/more-information_blogs.png')}
            /> 
        <Text>Web</Text>
        <Image 
                style={styles.socialMediaLogo}
                source={require('../assets/images/about_us/more-information_www.png')}
            /> 

        <Text category="p1" style={styles.main_text}>
          We look forward to making great science with you!
        </Text>

        <Text category="p1" style={styles.main_text}>
          Director: Professor Stephan Beck
        </Text>

        <Text category="p1" style={styles.main_text}>
          Location: University College London
        </Text>

        <Text category="p1" style={styles.bottom_red_text}>
          DISCLAIMER: The generation of genomic data is not an error-free process and our analysis system is 
          still under development. becasue the body of knowledge of genetic and epigenetic variants has many 
          uncertainties, we cannot guarantee that our analyses are either accurate or complete. 
        </Text>

        <Text category="p1" style={styles.bottom_text}>
          This app was designed and develpoed by
        </Text>

        <Image style={{
          
          height: 225,
          width: 400
        }} source={require("../assets/images/about_us/more-information_globe.png")} />
      
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#63BEE1',
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 25,
    alignItems: 'center',
  },
  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
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
    marginTop: 20,
    marginBottom: 25,
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
