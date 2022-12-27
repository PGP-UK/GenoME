import React, { useContext } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { Section, Block } from 'react-native-responsive-layout';
import FastImage from '@cuvent/react-native-fast-image';

import PageLayout from '../../../components/PageLayout';
import { PageText } from '../../../components/Text';
import { PageHeader } from '../../../components/Text';
import BackButton from '../../../components/BackButton';
import DataContext from '../../../Context/DataContext';

const SNVImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { image } = props;
  const numImagesPerRow = sizeSelector({ xs: 1, md: 3 });
  const spacingBetweenImages = sizeSelector({ xs: 40, sm: 120, md: 80 });

  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) -
    spacingBetweenImages;
  return (
    <FastImage
      source={image}
      resizeMode={FastImage.resizeMode.contain}
      style={{ width: imageWidth, height: imageWidth }}
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
      <SNVImage image={image} resizeMode="contain" />
      <PageHeader style={[styles.header2, { color: themeColor }]}>
        {header}
      </PageHeader>
    </Pressable>
  </Block>
);

const Health = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const { health: {AllAmbassadors} } = useContext(DataContext)
  const healthData = AllAmbassadors[name];
  const themeColor = healthData.themeColor;
  return (
    <>
      <PageLayout>
        <Section>
          <Block xsSize="80%" mdSize="80%">
            <PageHeader category="h1" style={styles.header}>
              Health
            </PageHeader>
          </Block>
          <Block xsSize="20%" mdSize="20%">
            <BackButton navigation={navigation} />
          </Block>
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
    fontSize: 35,
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
