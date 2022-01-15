import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import PageLayout from '../components/PageLayout';
import HeaderRow from './individual/About/HeaderRow';
import SocialMedia from './individual/About/SocialMedia';
import { PageText } from '../components/Text';
import { Section } from 'react-native-responsive-layout';


const About = (props) => {
  const { navigation } = props;
  return (
    <>
      <PageLayout>
       <HeaderRow navigation={navigation} HeaderStyle={styles.headerRow} />
        <PageText style={styles.main_text}>
          The PGP-UK project is part of the global network of Personal Genome Projects, which all share
          the vision of advancing science through open data sharing. Currently, there are projects in America,
          Austria, Canada, China and the UK. There are multiple ways to join the PGP-UK community and keep-up-date 
          with the project - just follow the links.
        </PageText>

        <Section
          stretch
          style={{
            alignItems: 'center',
            alignContent: 'center',
            paddingBottom: 50,
          }}>
         <SocialMedia navigation={navigation} SocialMediaStyle={styles.socialMedia}/>
        </Section>
       
        <Section
          stretch
          style={{
            alignItems: 'center',
            alignContent: 'center',
            paddingBottom: 50,
          }}>
         <ImageBackground style={styles.bottomImage} source={require("../assets/images/about_us/more-information_globe.png")} >
       
        
          
          <PageText style={styles.bottom_red_text}>
            DISCLAIMER: The generation of genomic data is not an error-free process and our analysis system is 
            still under development. becasue the body of knowledge of genetic and epigenetic variants has many 
            uncertainties, we cannot guarantee that our analyses are either accurate or complete. 
          </PageText>
          
          <PageText style={styles.bottom_text}>
            This app was designed and developed by the PGP-UK/GenoME team.
          </PageText>
        </ImageBackground>
        </Section>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({

  headerRow: {
    marginBottom: 25,
  },

  main_text: {
    color: '#666E7A',
    fontSize: 20,
  },

  socialMedia: {
    marginBottom: 25,
  },

  bottom_text: {
    color: '#666E7A',
    fontSize: 10,
    marginBottom: 20,
  },

  bottom_red_text: {
    color: '#ff0000',
    fontSize: 10,
    marginBottom: 10,
  },

  bottomImage:{
    height: 225,
    width: 400,
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