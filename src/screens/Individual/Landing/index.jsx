import React, {useContext} from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Section, Block, Grid } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import FastImage from '@cuvent/react-native-fast-image';

import PageLayout from '../../../components/PageLayout';
import DataContext from '../../../Context/DataContext';

import TextSection from './TextSection';

const Icons = [
  {
    pageName: 'Variant',
    image: require('./../../../../assets/Individual/Landing/variant-light.png'),
  },
  {
    pageName: 'Ancestry',
    image: require('./../../../../assets/Individual/Landing/earth-icon.png'),
  },
  {
    pageName: 'Eyes',
    image: require('./../../../../assets/Individual/Landing/eye-icon.png'),
  },
  {
    pageName: 'Health',
    image: require('./../../../../assets/Individual/Landing/health-icon.png'),
  },
  {
    pageName: 'Age',
    image: require('./../../../../assets/Individual/Landing/age-icon.png'),
  },
  {
    pageName: 'Smoking',
    image: require('./../../../../assets/Individual/Landing/smoking-icon.png'),
  }
];

const Iconimage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { icon } = props;
  const numImagesPerRow = sizeSelector({ xs: 2, sm: 3, md: 6 });
  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) - 40;
  return (
    <FastImage
      source={icon}
      resizeMode={FastImage.resizeMode.contain}
      style={{ width: imageWidth, height: imageWidth }}
    />
  );
});

const LandingIcon = ({ IconData, name, navigation }) => {
  return (
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
};

const Landing = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const {landing: {ThemeColors}} = useContext(DataContext)

  return (
    <>
      <PageLayout backgroundColor={ThemeColors[name]}>
        <Grid>
          <TextSection themeColor={ThemeColors[name]} navigation={navigation} />
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
    </>
  );
};

const styles = StyleSheet.create({
  landingIconWrapper: {
    alignItems: 'center',
  },
  box: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  avpic: {
    width: 200,
    height: 200,
    borderRadius: 205 / 2,
    overflow: 'hidden',
    borderWidth: 3,
  },
  avcontainer: {
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 8,
    flexWrap: 'wrap',
  },
  button_style: {
    color: 'white',
    backgroundColor: '#00d5ff',
    padding: 10,
  },
  headerBtn: {
    backgroundColor: '#3BAEDA',
    borderWidth: 0,
    color: '#fff',
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
