import React, { useContext } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import FastImage from '@cuvent/react-native-fast-image';

import PageLayout from '../../../components/PageLayout';
import { PageText } from '../../../components/Text';
import { PageHeader } from '../../../components/Text';
import HeaderRow from '../../../components/HeaderRow'
import DataContext from '../../../Context/DataContext';
import { useNavigation } from '@react-navigation/native';

const Health = (props) => {
  const { route } = props;
  const { name } = route.params;
  const { health: {AllAmbassadorsData, diseaseIcons }, themeColors } = useContext(DataContext)
  const healthData = AllAmbassadorsData[name];
  const themeColor = themeColors[name];
  return (
    <PageLayout>
      <HeaderRow backBtn>Health</HeaderRow>
      <Section>
        <Block>
          <PageText category="p1" style={styles.main_text}>
            Genetic makeup can also give indications on inherited risks and general disease risks.
            Environmental factors can also have a bearing on these results.
          </PageText>
          <PageText category="p1" style={styles.main_text}>
            Just like everyone else, I have millions of single nucleotide variants (SNVs).
            These are positions in my DNA which differ between individuals. For the majority of my SNVs,
            their functions are not yet known. While some SNVs act individually to increase or
            reduce my risk for a given trait or disease, most act in groups
            together with environmental and other factors.
          </PageText>
          <PageText category="p1" style={styles.main_text}>
            Tap below to explore the frequency and risk associated with three of my SNVs.
          </PageText>
        </Block>
      </Section>
      <Grid>
        <Section style={styles.container}>
          {
            diseaseIcons.map(icon => (
              <SNVImages key={icon.disease} disease={icon.disease} header={icon.header}
                image={healthData[icon.disease].snvIcon} name={name} themeColor={themeColor}
              />
            ))
          }
        </Section>
      </Grid>
    </PageLayout>
  );
};

const SNVImages = (props) => {
  const navigation = useNavigation()
  const { name, image, themeColor, disease, header } = props
  const navigationParams = { name: name.toLowerCase(), disease: disease }
  return (
    <Block xsSize="100%" mdSize="33%" xlSize="50%" xxlSize="33%">
      <Pressable onPress={() => navigation.navigate('Diseases', navigationParams)} style={styles.box}>
        <SNVImage image={image} />
        <PageHeader style={[styles.header, { color: themeColor }]}>
          {header}
        </PageHeader>
      </Pressable>
    </Block>
  )
};

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    marginTop: 15
  },
  header: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  main_text: {
    marginBottom: 20,
  },
  box: {
    alignItems: 'center',
    padding: 10,
  },
});

export default Health;
