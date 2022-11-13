import React from 'react';
import { StyleSheet } from 'react-native';
import PageLayout from '../../components/PageLayout';
import SocialMedia from './SocialMedia';
import { PageHeader, PageText } from '../../components/Text';
import { Section, Block } from 'react-native-responsive-layout';
import ImageBackground from './ImageBackground';
import HeaderRow from './HeaderRow';

const About = (props: any) => {
  const { navigation } = props;
  interface Props {
    navigation: any;
  }
  return (
    <>
      <PageLayout>
        <Section>
          <Block>
            <HeaderRow />
          </Block>
        </Section>
        <Section
          stretch
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Block>
            <PageText style={styles.main_text}>
              The PGP-UK project is part of the global network of Personal
              Genome Projects, which all share the vision of advancing science
              through open data sharing. Currently, there are projects in
              America, Austria, Canada, China and the UK. There are multiple
              ways to join the PGP-UK community and keep-up-date with the
              project - just follow the links.
            </PageText>
          </Block>
        </Section>
        <Section
          stretch
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Block>
            <PageText style={styles.main_text1}>
              We look forward to making great science with you!
            </PageText>
            <PageText style={styles.main_text2}>
              Director: Professor Stephan Beck {'\n'}
              Location: University College London
            </PageText>
          </Block>
        </Section>

        <Section stretch>
          <Block style={styles.backgroundImage}>
            <ImageBackground
              source={{
                uri: 'https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets/images/about_us/more-information_globe.png',
              }}></ImageBackground>
          </Block>
        </Section>
        <Section style={styles.bottomSection}>
          <Block>
            <PageText style={styles.bottom_red_text}>
              DISCLAIMER: The generation of genomic data is not an error-free
              process and our analysis system is still under development.
              becasue the body of knowledge of genetic and epigenetic variants
              has many uncertainties, we cannot guarantee that our analyses are
              either accurate or complete.
            </PageText>
            <PageText style={styles.bottom_text}>
              This app was designed and developed by the PGP-UK/GenoME team.
            </PageText>
          </Block>
          <Block>
            <SocialMedia
              navigation={navigation}
              SocialMediaStyle={styles.socialMedia}
            />
          </Block>
        </Section>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    marginBottom: 25,
  },
  main_text2: {
    textAlign: 'left',
  },
  main_text1: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'left',
  },
  main_text: {
    color: '#666E7A',
  },
  bottom_text: {
    color: '#666E7A',
    fontSize: 10,
    position: 'relative',
    marginTop: 5,
    marginBottom: 20,
  },
  bottom_red_text: {
    color: '#ff0000',
    fontSize: 10,
    textAlign: 'auto',
    // position: 'relative',
  },
  bottomSection: {
    paddingTop: 10,
  },
  backgroundImage: {
    paddingTop: 20,
    paddingBottom: 25,
  },
  bottomImage: {
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  socialMedia: {
    marginTop: 20,
    marginBottom: 25,
  },

  socialMediaLogo: {
    width: 50,
    height: 50,
  },
});

export default About;
