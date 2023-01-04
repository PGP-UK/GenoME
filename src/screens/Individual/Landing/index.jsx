import React, { useContext } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Section, Block, Grid } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import FastImage from '@cuvent/react-native-fast-image';

import PageLayout from '../../../components/PageLayout';
import DataContext from '../../../Context/DataContext';

import BackButton from './BackButton';
import TextSection from './TextSection';
import Icons from './Icons';

const Landing = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const {
    landing: { ThemeColors },
  } = useContext(DataContext);

  return (
    <PageLayout backgroundColor={ThemeColors[name]}>
      <BackButton />
      <TextSection />
      <Grid>
        <Section style={styles.iconsWrapper}>
          {Icons.map((IconData, idx) => (
            <LandingIcon
              key={idx}
              IconData={IconData}
              name={name}
              navigation={navigation}
            />
          ))}
        </Section>
      </Grid>
    </PageLayout>
  );
};

const LandingIcon = ({ IconData, name, navigation }) => (
  <Block
    xsSize="50%"
    smSize="33%"
    mdSize="16.6%"
    style={styles.landingIconWrapper}>
    <Pressable
      onPress={() =>
        navigation.navigate(IconData.pageName, { name: name.toLowerCase() })
      }
      style={styles.box}>
      <Iconimage icon={IconData.image} />
      <Text category="h4" style={styles.iconText}>
        {IconData.pageName}
      </Text>
    </Pressable>
  </Block>
);

const Iconimage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { icon } = props;
  const numImagesPerRow = sizeSelector({ xs: 2, sm: 3, md: 6 });
  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) - 60;
  return (
    <View style={{ borderRadius: (imageWidth + 50)/2, borderWidth: 5, borderColor: '#fff', padding: 15 }}>
      <FastImage
        source={icon}
        resizeMode={FastImage.resizeMode.contain}
        style={{ width: imageWidth, height: imageWidth }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  landingIconWrapper: {
    alignItems: 'center',
  },
  box: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  iconText: {
    paddingTop: 7,
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  iconsWrapper: {
    justifyContent: 'center',
  },
});

export default Landing;
