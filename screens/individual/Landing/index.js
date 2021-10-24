import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Text } from '@ui-kitten/components';
import PageLayout from '../../../components/PageLayout';
import { Section, Block, Grid } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import TextSection from './TextSection';

const ThemeColors = {
  stephan: '#8CD8C4',
  laura: '#F6BD4A',
  momodou: '#D94553',
  colin: '#9C82DE',
};

const Icons = [
  {
    pageName: 'Ancestry',
    image: require('../../../assets/images/landing_screen_icons/globe-europe-light.png'),
  },
  {
    pageName: 'Eyes',
    image: require('../../../assets/images/landing_screen_icons/eye-light.png'),
  },
  {
    pageName: 'Health',
    image: require('../../../assets/images/landing_screen_icons/heartbeat-light.png'),
  },
  {
    pageName: 'Age',
    image: require('../../../assets/images/landing_screen_icons/birthday-cake-light.png'),
  },
  {
    pageName: 'Smoking',
    image: require('../../../assets/images/landing_screen_icons/smoking-light.png'),
  },
];

const Iconimage = withSizeInfo(({ sizeSelector, ...props }) => {
  const numImagesPerRow = sizeSelector({ xs: 1, sm: 2, md: 5 });
  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) - 40;
  return (
    <Image
      {...props}
      style={{ width: imageWidth, height: imageWidth }}
      resizeMode="contain"
    />
  );
});

const LandingIcon = ({ IconData, name, navigation }) => {
  return (
    <Block xsSize="100%" smSize="50%" mdSize="20%" style={styles.landingIconWrapper}>
      <Pressable
        onPress={() =>
          navigation.navigate(IconData.pageName, { name: name.toLowerCase() })
        }
        style={styles.box}
      >
        <Iconimage source={IconData.image} />
        <Text
          category="h4"
          style={{
            paddingTop: 20,
            textAlign: 'center',
            color: 'white',
          }}
        >
          {IconData.pageName}
        </Text>
      </Pressable>
    </Block>
  )
}

const Landing = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;

  return (
    <>
      <PageLayout backgroundColor={ThemeColors[name]}>
        <Grid>
          <TextSection />
          <Section>
            {Icons.map((IconData, idx) => (
              <LandingIcon key={idx} IconData={IconData} name={name} navigation={navigation} />
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
    marginTop: 30
  },
  box: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
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
});

export default Landing;
