import React from 'react';
import { StyleSheet } from 'react-native';
import { Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import FastImage from '@cuvent/react-native-fast-image';

const GlobeImage = withSizeInfo(({ sizeSelector }) => {
  const imagePercentage = sizeSelector({ xs: 1, xxl: 1 });
  const imageWidth = Math.round(useSafeAreaFrame().width * imagePercentage);
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 1);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;
  const center_animation_style = sizeSelector({
    lg: styles.center_animation_lg,
    xl: styles.center_animation_xl,
    xxl: styles.center_animation_xxl,
  });

  return (
    <>
      <Block hidden lgVisible style={center_animation_style}>
        <FastImage
          source={require('./../../../../assets/About/ancestry_world.jpeg')}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            height: maxImageHeight - 600,
            width: finalImageWidth,
            alignSelf: 'center',
            position: 'absolute',
          }}
        />
      </Block>
    </>
  );
});

const styles = StyleSheet.create({
  center_animation_lg: {
    paddingLeft: '45%',
    marginTop: -100,
  },
  center_animation_xl: {
    paddingLeft: '45%',
    marginTop: -190,
  },
});

export default GlobeImage;
