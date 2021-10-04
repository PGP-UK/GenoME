import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const AllAmbassadors = [
  {
    name: 'Stephan',
    hexId: 'uk35C650',
    image: require('../../assets/images/home_screen_profiles/stephan.gif'),
    themeColor: '#8CD8C4',
  },
  {
    name: 'Laura',
    hexId: 'uk33D02F',
    image: require('../../assets/images/home_screen_profiles/laura.gif'),
    themeColor: '#F6BD4A',
  },
  {
    name: 'Momodou',
    hexId: 'uk481F67',
    image: require('../../assets/images/home_screen_profiles/momodou.gif'),
    themeColor: '#D94553',
  },
  {
    name: 'Colin',
    hexId: 'uk4CA868',
    image: require('../../assets/images/home_screen_profiles/colin.gif'),
    themeColor: '#9C82DE',
  },
];

const AmbassadorImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const numImagesPerRow = sizeSelector({ xs: 1, sm: 2, md: 4 });
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

const Ambassador = (props) => {
  const { name, hexId, image, themeColor, navigation } = props;
  return (
    <Block xsSize="100%" smSize="50%" mdSize="25%">
      <Pressable
        onPress={() =>
          navigation.navigate('Landing', { name: name.toLowerCase() })
        }
        style={styles.box}>
        <AmbassadorImage source={image} />
        <Text category="p1" style={[styles.header, { color: themeColor }]}>
          {hexId}
        </Text>
        <Text category="p1" style={styles.secondLineText}>
          Also known as: {name}
        </Text>
      </Pressable>
    </Block>
  );
};

const Ambassadors = ({ navigation }) => (
  <Grid>
    <Section>
      {AllAmbassadors.map((AmbassadorData, idx) => (
        <Ambassador key={idx} {...AmbassadorData} navigation={navigation} />
      ))}
    </Section>
  </Grid>
);

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 10,
  },
  secondLineText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Ambassadors;
