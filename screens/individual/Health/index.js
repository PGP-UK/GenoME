import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import PageLayout from '../../../components/PageLayout';

const AllAmbassadors = {
  stephan: {
    heart_image: require(`../../../assets/images/health_screen_SNV/stephan_heart_SNV.png`),
    crohn_image: require(`../../../assets/images/health_screen_SNV/stephan_crohn_SNV.png`),
    ovarian_image: require(`../../../assets/images/health_screen_SNV/stephan_ovarian_SNV.png`),
    themeColor: '#8CD8C4',
  },
  colin: {
    heart_image: require(`../../../assets/images/health_screen_SNV/colin_heart_SNV.png`),
    crohn_image: require(`../../../assets/images/health_screen_SNV/colin_crohn_SNV.png`),
    ovarian_image: require(`../../../assets/images/health_screen_SNV/colin_ovarian_SNV.png`),
    themeColor: '#9C82DE',
  },
  laura: {
    heart_image: require(`../../../assets/images/health_screen_SNV/laura_heart_SNV.png`),
    crohn_image: require(`../../../assets/images/health_screen_SNV/laura_crohn_SNV.png`),
    ovarian_image: require(`../../../assets/images/health_screen_SNV/laura_ovarian_SNV.png`),
    themeColor: '#F6BD4A',
  },
  momodou: {
    heart_image: require(`../../../assets/images/health_screen_SNV/momodou_heart_SNV.png`),
    crohn_image: require(`../../../assets/images/health_screen_SNV/momodou_crohn_SNV.png`),
    ovarian_image: require(`../../../assets/images/health_screen_SNV/momodou_ovarian_SNV.png`),
    themeColor: '#D94553',
  },
};

const HeartSNV = (props) => {
  const { name, image, themeColor, navigation } = props;
  return (
    <>
      <Block xsSize="100%" smSize="33%" mdSize="33%">
        <Pressable
          onPress={() =>
            navigation.navigate('Heart', { name: name.toLowerCase() })
          }
          style={styles.box}>
          <Image source={image} style={styles.image} resizeMode="contain" />
          <Text category="h2" style={(styles.header, { color: themeColor })}>
            Heart disease
          </Text>
        </Pressable>
      </Block>
    </>
  );
};

const CrohnSNV = (props) => {
  const { name, image, themeColor, navigation } = props;
  return (
    <>
      <Block xsSize="100%" smSize="33%" mdSize="33%">
        <Pressable
          onPress={() =>
            navigation.navigate('Crohn', { name: name.toLowerCase() })
          }
          style={styles.box}>
          <Image source={image} style={styles.image} resizeMode="contain" />
          <Text category="h2" style={(styles.header, { color: themeColor })}>
            Crohn's disease
          </Text>
        </Pressable>
      </Block>
    </>
  );
};

const OvarianSNV = (props) => {
  const { name, image, themeColor, navigation } = props;
  return (
    <>
      <Block xsSize="100%" smSize="33%" mdSize="33%">
        <Pressable
          onPress={() =>
            navigation.navigate('Ovarian', { name: name.toLowerCase() })
          }
          style={styles.box}>
          <Image source={image} style={styles.image} resizeMode="contain" />
          <Text category="h2" style={(styles.header, { color: themeColor })}>
            Ovarian cancer
          </Text>
        </Pressable>
      </Block>
    </>
  );
};

const Health = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  return (
    <>
      <PageLayout>
        <Grid>
          <Section>
            <Block>
              <Text category="h1" style={styles.header}>
                Health
              </Text>
            </Block>
          </Section>
          <Section>
            <Block>
              <Text category="p1" style={styles.main_text}>
                Genetic makeup can also give inidications on inherited risks and
                general disease risks. Environmental factors can also have a
                bearing on these results.
              </Text>
              <Text category="p1" style={styles.main_text}>
                Just like everyone else, I have millions of single nucleotide
                variants (SNVs). These are positions in my DNA which differ
                between individuals. For the majority of my SNVs, their
                functions are not yet known. While some SNVs act individually to
                increase or reduce my risk for a given trait or disease, most
                act in groups together with environmental and other factors.
              </Text>
              <Text category="p1" style={styles.main_text}>
                Tap below to explore the frequency and risk associated with
                three of my SNVs.
              </Text>
            </Block>
          </Section>
          <Section>
            <HeartSNV
              name={name}
              image={AllAmbassadors[name].heart_image}
              themeColor={AllAmbassadors[name].themeColor}
              navigation={navigation}
            />
            <CrohnSNV
              name={name}
              image={AllAmbassadors[name].crohn_image}
              themeColor={AllAmbassadors[name].themeColor}
              navigation={navigation}
            />
            <OvarianSNV
              name={name}
              image={AllAmbassadors[name].ovarian_image}
              themeColor={AllAmbassadors[name].themeColor}
              navigation={navigation}
            />
          </Section>
        </Grid>
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
  },
  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
  button_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
  box: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: 250,
    width: 250,
  },
});

export default Health;
