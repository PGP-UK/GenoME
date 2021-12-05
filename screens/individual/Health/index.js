import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Text } from '@ui-kitten/components';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import PageLayout from '../../../components/PageLayout';

const AllAmbassadors = {
  stephan: {
    SNV_heart_image: require(`../../../assets/images/health_screen_SNV/stephan_heart_SNV.png`),
    SNV_crohn_image: require(`../../../assets/images/health_screen_SNV/stephan_crohn_SNV.png`),
    SNV_ovarian_image: require(`../../../assets/images/health_screen_SNV/stephan_ovarian_SNV.png`),
    themeColor: '#8CD8C4',
  },
  colin: {
    SNV_heart_image: require(`../../../assets/images/health_screen_SNV/colin_heart_SNV.png`),
    SNV_crohn_image: require(`../../../assets/images/health_screen_SNV/colin_crohn_SNV.png`),
    SNV_ovarian_image: require(`../../../assets/images/health_screen_SNV/colin_ovarian_SNV.png`),
    themeColor: '#9C82DE',
  },
  laura: {
    SNV_heart_image: require(`../../../assets/images/health_screen_SNV/laura_heart_SNV.png`),
    SNV_crohn_image: require(`../../../assets/images/health_screen_SNV/laura_crohn_SNV.png`),
    SNV_ovarian_image: require(`../../../assets/images/health_screen_SNV/laura_ovarian_SNV.png`),
    themeColor: '#F6BD4A',
  },
  momodou: {
    SNV_heart_image: require(`../../../assets/images/health_screen_SNV/momodou_heart_SNV.png`),
    SNV_crohn_image: require(`../../../assets/images/health_screen_SNV/momodou_crohn_SNV.png`),
    SNV_ovarian_image: require(`../../../assets/images/health_screen_SNV/momodou_ovarian_SNV.png`),
    themeColor: '#D94553',
  },
};

const SNVImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const numImagesPerRow = sizeSelector({ xs: 1, md: 3 });
  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) - 80;
  return (
    <Image
      {...props}
      style={{ width: imageWidth, height: imageWidth }}
      resizeMode="contain"
    />
  );
});

const SNVImages = ({
  name,
  image,
  themeColor,
  navigation,
  disease,
  header,
}) => (
  <Block xsSize="100%" smSize="100%" mdSize="33%">
    <Pressable
      onPress={() =>
        navigation.navigate('Diseases', {
          name: name.toLowerCase(),
          disease: disease,
        })
      }
      style={styles.box}>
      <SNVImage source={image} style={styles.image} resizeMode="contain" />
      <Text category="h2" style={[styles.header2, { color: themeColor }]}>
        {header}
      </Text>
    </Pressable>
  </Block>
);

const Health = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const healthData = AllAmbassadors[name];
  const themeColor = healthData.themeColor;
  return (
    <>
      <PageLayout>
        <Section>
          <Block>
            <Text category="h1" style={styles.header}>
              Health
            </Text>
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
            <Text category="p1" style={styles.main_text}>
              Genetic makeup can also give indications on inherited risks and
              general disease risks. Environmental factors can also have a
              bearing on these results.
            </Text>
            <Text category="p1" style={styles.main_text}>
              Just like everyone else, I have millions of single nucleotide
              variants (SNVs). These are positions in my DNA which differ
              between individuals. For the majority of my SNVs, their functions
              are not yet known. While some SNVs act individually to increase or
              reduce my risk for a given trait or disease, most act in groups
              together with environmental and other factors.
            </Text>
            <Text category="p1" style={styles.main_text}>
              Tap below to explore the frequency and risk associated with three
              of my SNVs.
            </Text>
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
          <SNVImages
            disease="heart"
            header="Heart disease"
            name={name}
            image={healthData.SNV_heart_image}
            themeColor={themeColor}
            navigation={navigation}
          />
          <SNVImages
            disease="crohn"
            header="Crohn's disease"
            name={name}
            image={healthData.SNV_crohn_image}
            themeColor={themeColor}
            navigation={navigation}
          />
          <SNVImages
            disease="ovarian"
            header="Ovarian cancer"
            name={name}
            image={healthData.SNV_ovarian_image}
            themeColor={themeColor}
            navigation={navigation}
          />
        </Section>
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
  header2: {
    fontWeight: '400',
    textAlign: 'center',
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
