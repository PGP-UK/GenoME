import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

const GlobeImage = withSizeInfo(({ sizeSelector }) => {
  const imagePercentage = sizeSelector({ xs: 1, xxl: 1 });
  const imageWidth = Math.round(useSafeAreaFrame().width * imagePercentage);
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 1);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;
  const center_animation_style = sizeSelector({
    xs: styles.center_animation_xs,
    md: styles.center_animation_md,
    lg: styles.center_animation_lg,
    xxl: styles.center_animation_xxl,
  });
  const ancestryWorldUrl =
    'https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets/images/ancestry_screen_pie/ancestry_world.jpeg';

  return (
    <>
      <FastImage
        source={{ uri: ancestryWorldUrl }}
        resizeMode={FastImage.resizeMode.contain}
        style={{
          height: maxImageHeight - 600,
          width: finalImageWidth,
          alignSelf: 'center',
          position: 'absolute',
        }}
      />
    </>
  );
});

const styles = StyleSheet.create({
  center_animation_xs: {
    alignContent: 'center',
    paddingLeft: '23%',
  },
  center_animation_md: {
    alignContent: 'center',
    paddingLeft: '23%',
  },
  center_animation_lg: {
    alignContent: 'center',
    paddingLeft: '23%',
  },
  center_animation_xxl: {
    alignContent: 'center',
    paddingLeft: '8%',
  },
  percent_box: {
    alignItems: 'center',
  },
});

export default GlobeImage;
