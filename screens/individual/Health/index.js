import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { Section, Block } from 'react-native-responsive-layout';
import PageLayout from '../../../components/PageLayout';
import { PageText } from '../../../components/Text';
import { PageHeader } from '../../../components/Text';
import { AmbassadorSwitch } from '../../../components/AmbassadorSwitch';

const AllAmbassadors = {
  stephan: {
    SNV_heart_image: require(`../../../assets/images/health_screen_SNV/stephan_heart_SNV.png`),
    SNV_crohn_image: require(`../../../assets/images/health_screen_SNV/stephan_crohn_SNV.png`),
    SNV_ovarian_image: require(`../../../assets/images/health_screen_SNV/stephan_ovarian_SNV.png`),
    image: require('../../../assets/images/home_screen_profiles/stephan.gif'),
    themeColor: '#8CD8C4',
  },
  colin: {
    SNV_heart_image: require(`../../../assets/images/health_screen_SNV/colin_heart_SNV.png`),
    SNV_crohn_image: require(`../../../assets/images/health_screen_SNV/colin_crohn_SNV.png`),
    SNV_ovarian_image: require(`../../../assets/images/health_screen_SNV/colin_ovarian_SNV.png`),
    image: require('../../../assets/images/home_screen_profiles/colin.gif'),
    themeColor: '#9C82DE',
  },
  laura: {
    SNV_heart_image: require(`../../../assets/images/health_screen_SNV/laura_heart_SNV.png`),
    SNV_crohn_image: require(`../../../assets/images/health_screen_SNV/laura_crohn_SNV.png`),
    SNV_ovarian_image: require(`../../../assets/images/health_screen_SNV/laura_ovarian_SNV.png`),
    image: require('../../../assets/images/home_screen_profiles/laura.gif'),
    themeColor: '#F6BD4A',
  },
  momodou: {
    SNV_heart_image: require(`../../../assets/images/health_screen_SNV/momodou_heart_SNV.png`),
    SNV_crohn_image: require(`../../../assets/images/health_screen_SNV/momodou_crohn_SNV.png`),
    SNV_ovarian_image: require(`../../../assets/images/health_screen_SNV/momodou_ovarian_SNV.png`),
    image: require('../../../assets/images/home_screen_profiles/momodou.gif'),
    themeColor: '#D94553',
  },
};

const SNVImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const numImagesPerRow = sizeSelector({ xs: 1, md: 3 });
  const spacingBetweenImages = sizeSelector({ xs: 40, sm: 120, md: 80 });

  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) -
    spacingBetweenImages;
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
  <Block
    xsSize="100%"
    smSize="100%"
    mdSize="33%"
    lgSize="33%"
    xlSize="50%"
    xxlSize="33%">
    <Pressable
      onPress={() =>
        navigation.navigate('Diseases', {
          name: name.toLowerCase(),
          disease: disease,
        })
      }
      style={styles.box}>
      <SNVImage source={image} resizeMode="contain" />
      <PageHeader style={[styles.header2, { color: themeColor }]}>
        {header}
      </PageHeader>
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
          <Block xsSize="100%" mdSize="60%">
            <PageHeader category="h1" style={styles.header}>
              Health
            </PageHeader>
          </Block>
          <AmbassadorSwitch
            AllAmbassadors={AllAmbassadors}
            navigation={navigation}
            name={name}
            page={'Health'}
          />
        </Section>
        <Section>
          <Block>
            <PageText category="p1" style={styles.main_text}>
              Genetic makeup can also give indications on inherited risks and
              general disease risks. Environmental factors can also have a
              bearing on these results.
            </PageText>
            <PageText category="p1" style={styles.main_text}>
              Just like everyone else, I have millions of single nucleotide
              variants (SNVs). These are positions in my DNA which differ
              between individuals. For the majority of my SNVs, their functions
              are not yet known. While some SNVs act individually to increase or
              reduce my risk for a given trait or disease, most act in groups
              together with environmental and other factors.
            </PageText>
            <PageText category="p1" style={styles.main_text}>
              Tap below to explore the frequency and risk associated with three
              of my SNVs.
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
          <SNVImages
            disease="heart"
            header={'Heart Disease'}
            name={name}
            image={healthData.SNV_heart_image}
            themeColor={themeColor}
            navigation={navigation}
          />
          <SNVImages
            disease="crohn"
            header={"Crohn's Disease"}
            name={name}
            image={healthData.SNV_crohn_image}
            themeColor={themeColor}
            navigation={navigation}
          />
          <SNVImages
            disease="ovarian"
            header={'Ovarian Cancer'}
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
    marginBottom: 25,
  },
  header2: {
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 25,
  },
  main_text: {
    marginBottom: 20,
  },
  button_text: {
    marginBottom: 20,
  },
  box: {
    alignItems: 'center',
    padding: 10,
    // marginTop: 10,
    // marginBottom: 10,
  },
});

export default Health;
