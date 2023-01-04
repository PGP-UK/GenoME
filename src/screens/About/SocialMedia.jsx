import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import * as Linking from 'expo-linking';
import FastImage from '@cuvent/react-native-fast-image';

const icons = [
  {
    image: require('./../../../assets/About/more-information_twitter.png'),
    link: 'https://twitter.com/pgpuk_genomes',
  },
  {
    image: require('./../../../assets/About/more-information_blogs.png'),
    link: 'https://pgpukblog.wordpress.com',
  },
  {
    image: require('./../../../assets/About/more-information_www.png'),
    link: 'https://www.personalgenomes.org.uk',
  },
];

const SocialMedia = () => (
  <View style={styles.container}>
    {icons.map((icon) => (
      <TouchableWithoutFeedback
        key={icon.link}
        onPress={() => Linking.openURL(icon.link)}>
        <FastImage style={styles.socialMediaLogo} source={icon.image} />
      </TouchableWithoutFeedback>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialMediaLogo: {
    width: 50,
    height: 50,
  },
});

export default SocialMedia;
