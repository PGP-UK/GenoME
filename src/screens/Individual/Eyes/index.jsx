import React, { useContext, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import FastImage from '@cuvent/react-native-fast-image';
import { Video } from 'expo-av';

import { PageHeader } from '../../../components/Text';
import PageLayout from '../../../components/PageLayout';
import { PageText } from '../../../components/Text';
import HeaderRow from '../../../components/HeaderRow';
import DataContext from '../../../Context/DataContext';

const Eyes = (props) => {
  const { route } = props;
  const { name } = route.params;
  const { eyes: { AllAmbassadors } } = useContext(DataContext)
  const eyeData = AllAmbassadors[name];
  const themeColor = eyeData.themeColor;

  return (
    <>
      <PageLayout>
        <HeaderRow goBackBtn displayAmbassadorSwitch>Eye Colour</HeaderRow>
        <PageText category="p1">
          Eye colour is determined by multiple genetic variants, some of which have been used to predict my eye colour.
          Below you can see my actual eyes and the predicted eye colour - how well do you think the prediction has worked?
        </PageText>

        <Grid stretchable>
          <Section stretch style={styles.container}>
            <Block size="50%" hidden mdVisible>
              <EyeVideo source={eyeData.eyeCloseUp}/>
            </Block>
            <Block size="50%" hidden mdVisible >
              <EyeImage image={eyeData.actualEyeImage} />
              <PageHeader style={[styles.myPredictedEyeColour, { color: themeColor }]}>
                {eyeData.colorText}
              </PageHeader>
            </Block>
          </Section>
        </Grid>
        <Grid>
          <Section>
            <Block mdHidden>
              <EyeVideo source={eyeData.eyeCloseUp}/>
              <PageHeader style={[styles.myPredictedEyeColour, { color: themeColor }]}>
                {eyeData.colorText}
              </PageHeader>
              <EyeImage image={eyeData.actualEyeImage} />
            </Block>
          </Section>
        </Grid>
      </PageLayout>
    </>
  );
};

const EyeVideo = withSizeInfo(({ sizeSelector, ...props }) => {
  const { source } = props
  const videoRef = useRef(null);

  const numImagesPerRow = sizeSelector({ xs: 1, md: 2 });
  const imageWidth = Math.round(useSafeAreaFrame().width / numImagesPerRow)
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <Video
        shouldPlay={true}
        ref={videoRef}
        style={[{ width: finalImageWidth, height: finalImageWidth * 0.75 }, styles.video]}
        isMuted // TODO - REMOVE SOUND from these videos
        source={source}
        resizeMode="contain"
      />
    </View>
  )
});

const EyeImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { image } = props;

  const numImagesPerRow = sizeSelector({ xs: 1, md: 2 });
  const imageWidth = Math.round(useSafeAreaFrame().width / numImagesPerRow)
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <FastImage
      source={image}
      resizeMode={FastImage.resizeMode.contain}
      style={[{width: finalImageWidth, height: finalImageWidth}, styles.image]}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  myPredictedEyeColour: {
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    margin: 10,
    marginTop: 0,
    alignSelf: 'center',
    justifySelf: 'center'
  },
  video: {
    alignSelf: 'flex-end',
    justifySelf: 'flex-end'
  }
});

export default Eyes;
