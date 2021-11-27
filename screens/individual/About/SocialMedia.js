import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        paddingTop: 50,
      },
      socialMediaLogo: {
        width: 50,
        height: 50,
      },
});
const SocialMedia = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.socialMediaLogo}
                source={require('../../../assets/images/about_us/more-information_twitter.png')}
            /> Twitter
            <Image 
                style={styles.socialMediaLogo}
                source={require('../../../assets/images/about_us/more-information_blogs.png')}
            /> Blogs
            <Image 
                style={styles.socialMediaLogo}
                source={require('../../../assets/images/about_us/more-information_www.png')}
            /> Web
        </View>
    );
}


export default SocialMedia;
