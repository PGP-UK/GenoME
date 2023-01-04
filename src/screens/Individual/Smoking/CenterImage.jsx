import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import FastImage from '@cuvent/react-native-fast-image';

const CenterImage = withSizeInfo(({ sizeSelector, data, ...props }) => {
  const { image } = props;
  const imagePercentage = sizeSelector({ xs: 0.8, md: 0.4 });
  const imageWidth =
    Math.round(useSafeAreaFrame().width * imagePercentage) - 40;
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <Image
      source={image}
      resizeMode={FastImage.resizeMode.contain}
      style={[
        styles.image,
        { tintColor: data.themeColor },
        { width: finalImageWidth, height: finalImageWidth },
      ]}
    />
  );
});

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default CenterImage;
