import React from 'react';
import { StyleSheet } from 'react-native';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import FastImage from '@cuvent/react-native-fast-image';

const GlobeImage = withSizeInfo(({ sizeSelector }) => {
  const imagePercentage = sizeSelector({ xs: 0.9 });
  const imageWidth = Math.round(useSafeAreaFrame().width * imagePercentage);
  const maxImageHeight = useSafeAreaFrame().height * imagePercentage
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <FastImage
      source={require('./../../../../assets/About/ancestry_world.jpeg')}
      resizeMode={FastImage.resizeMode.contain}
      style={{
        height: finalImageWidth * .4,
        width: finalImageWidth,
        alignSelf: 'center',
      }}
    />
  );
});

const styles = StyleSheet.create({
});

export default GlobeImage;
