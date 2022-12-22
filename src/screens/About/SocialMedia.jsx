import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Text } from '@ui-kitten/components';
import * as Linking from 'expo-linking';
import FastImage from '@cuvent/react-native-fast-image';

const SocialMedia = () => (
  <View style={[styles.container, { flexDirection: 'column' }]}>
    <View
      style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <Text
        style={styles.socialMediaText}
        onPress={() => Linking.openURL('https://twitter.com/pgpuk_genomes')}>
        Twitter
      </Text>
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL('https://twitter.com/pgpuk_genomes')}>
        <FastImage
          style={styles.socialMediaLogo}
          source={require('./../../../assets/About/more-information_twitter.png')}
        />
      </TouchableWithoutFeedback>
      <Text
        style={styles.socialMediaText}
        onPress={() => Linking.openURL('https://pgpukblog.wordpress.com/')}>
        Blogs
      </Text>
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL('https://pgpukblog.wordpress.com/')}>
        <FastImage
          style={styles.socialMediaLogo}
          source={require('./../../../assets/About/more-information_blogs.png')}
        />
      </TouchableWithoutFeedback>
      <Text
        style={styles.socialMediaText}
        onPress={() => Linking.openURL('https://www.personalgenomes.org.uk/')}>
        Web
      </Text>
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL('https://www.personalgenomes.org.uk/')}>
        <FastImage
          style={styles.socialMediaLogo}
          source={require('./../../../assets/About/more-information_www.png')}
        />
      </TouchableWithoutFeedback>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginVertical: 50,
  },

  main_text2: {
    color: '#666E7A',
    fontSize: 20,
    textAlign: 'left',
  },
  main_text1: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 10,
    paddingTop: 40,
    paddingBottom: 20,
    textAlign: 'left',
  },
  bottom_text: {
    color: '#666E7A',
    fontSize: 10,
    marginBottom: 20,
  },
  bottom_red_text: {
    color: '#ff0000',
    fontSize: 10,
    marginBottom: 20,
  },
  bottomImage: {
    marginTop: 20,
    marginBottom: 25,
  },
  socialMediaText: {
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  socialMediaLogo: {
    width: 50,
    height: 50,
  },
});

export default SocialMedia;