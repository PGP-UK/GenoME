import React, {useState} from 'react';
import { Image, StyleSheet, Pressable } from 'react-native';
import PageLayout from '../../../components/PageLayout';
import { PageText } from '../../../components/Text';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { Section, Block } from 'react-native-responsive-layout';
import { Video } from 'expo-av';
import StephanEyeVideo from "../../../assets/videos/stephan_eyes.mp4";
import { PageHeader } from '../../../components/Text';

const AllAmbassadors = {
  stephan: {
    eye_video: require('../../../assets/videos/stephan_eyes.mp4'),
    eye_image: require('../../../assets/images/eyes/blue_eye.png'),
    colorText : ("My eye colour is predicted to be blue"),
    themeColor: '#8CD8C4',
  },
  colin: {
    eye_video: require('../../../assets/videos/colin_eyes.mp4'),
    eye_image: require('../../../assets/images/eyes/blue_eye.png'),
    colorText : ("My eye colour is predicted to be blue"),
    themeColor: '#9C82DE',
  },
  laura: {
    eye_video: require('../../../assets/videos/laura_eyes.mp4'),
    eye_image: require('../../../assets/images/eyes/brown_eye.png'),
    colorText : ("My eye colour is predicted to be brown"),
    themeColor: '#F6BD4A',
  },
  momodou: {
    eye_video: require('../../../assets/videos/momodou_eyes.mp4'),
    eye_image: require('../../../assets/images/eyes/brown_eye.png'),
    colorText : ("My eye colour is predicted to be brown"),
    themeColor: '#D94553',
  },
};

const EyeImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const numImagesPerRow = sizeSelector({ xs: 1, md: 3 });
  const spacingBetweenImages = sizeSelector({ xs: 40, sm: 120, md: 80 });

  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) - spacingBetweenImages;
  return (
    <Image
      {...props}
      style={{ width: imageWidth, height: imageWidth }}
      resizeMode="contain"
    />
  );
});

const EyeImages = ({
  name,
  image,
  themeColor,
  header,
  navigation
}) => (
  <Block xsSize="100%" smSize="100%" mdSize="33%">
    <Pressable
      onPress={() =>
        navigation.navigate('Diseases', {
          name: name.toLowerCase(),
          disease: disease,
        })
      }
      style={styles.box}>
      <EyeImage source={image} resizeMode="contain" />
      <PageHeader style={[styles.header2, { color: themeColor }]}>
        {header}
      </PageHeader>
    </Pressable>
  </Block>
);

const Eyes = (props) => {
  const [videoNotLoaded, setVideoNotLoaded] = useState(false)
  const { route, navigation } = props;
  const { name } = route.params;
  const eyeData = AllAmbassadors[name];
  const themeColor = eyeData.themeColor;
  const header = eyeData.colorText;
  return (
    <>
      <PageLayout>
        <Section>
          <Block>
            <PageHeader category="h1" style={styles.header}>
              Eyes
            </PageHeader>
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
          <Video
                 source={StephanEyeVideo}
                 resizeMode={Video.RESIZE_MODE_CONTAIN}
                 shouldPlay
                 style={styles.eye_video}
                 onError={() => setVideoNotLoaded(true)}
            /></Section>
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
          <Block>
            <PageText category="p1" style={styles.main_text}>
            Eye colour is determined by multiple genetic variants, some of which
            have been used to predict my eye colour. Below you can see my actual
            eyes and the predicted eye colour - how well do you think the
            prediction has worked?
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
          <EyeImages
            name={name}
            image={eyeData.eye_image}
            themeColor={themeColor}
            header={eyeData.colorText}
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
  headerRow: {
    marginBottom: 25,
  },
  eye_image: {
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eye_video: {
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eye_text: {
    color: '#8742f5',
    fontSize: 30,
    marginBottom: 20,
    paddingTop: 30,
  },

});

export default Eyes;


























