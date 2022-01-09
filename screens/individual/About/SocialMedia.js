import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import { withSizeInfo } from 'react-native-responsive-layout/wrappers';

const SocialMedia = (props) => {
  const { navigation } = props;
  return (
<View style={[styles.container, {flexDirection: "column"}]}>
  
  <View style={{ flex: 1, flexDirection:"row", justifyContent:"space-evenly"}}>
    <Text style={styles.socialMediaText }>Twitter</Text>
    <Image 
      style={styles.socialMediaLogo}
      source={require('../../../assets/images/about_us/more-information_twitter.png')}
    /> 
    <Text style={styles.socialMediaText}>Blogs</Text>
    <Image 
      style={styles.socialMediaLogo}
      source={require('../../../assets/images/about_us/more-information_blogs.png')}
    /> 
    <Text style={styles.socialMediaText}>Web</Text>
    <Image 
      style={styles.socialMediaLogo}
      source={require('../../../assets/images/about_us/more-information_www.png')}
    /> 
    </View>
   
    <View style={{ flex: 1 }}>
      <Text style={styles.main_text}>
        We look forward to making great science with you!
      </Text>
       <Text style={styles.main_text}>
       Director: Professor Stephan Beck {"\n"}
       Location: University College London
      </Text>
      </View>
</View>
)};
 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 10,
    paddingTop: 40,
    paddingBottom: 20,
    textAlign: "left",
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

  bottomImage:{
    marginTop: 20,
    marginBottom: 25,
  },

  socialMediaText:{
    justifyContent: "space-between" ,
    paddingVertical: 20,
  },

  socialMediaLogo: {
    width: 50,
    height: 50, 
  },
  
});

export default SocialMedia;