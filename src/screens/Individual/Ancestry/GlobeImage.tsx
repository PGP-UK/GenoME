import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Block, Section } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

const GlobeImage = withSizeInfo(({ sizeSelector }) => {
  const imagePercentage = sizeSelector({ xs: 1, xxl: 1 });
  const imageWidth = Math.round(useSafeAreaFrame().width * imagePercentage);
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 1);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  const ancestryWorldUrl =
    'https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets/images/ancestry_screen_pie/ancestry_world.jpeg';

  return (
    <>
      <Block hidden xlVisible>
        <FastImage
          source={{ uri: ancestryWorldUrl }}
          resizeMode={FastImage.resizeMode.contain}
          style={{
            height: maxImageHeight - 600,
            width: finalImageWidth,
            alignSelf: 'center',
            position: 'absolute',
            marginTop: -200,
          }}
        />
      </Block>
    </>
  );
});

export default GlobeImage;
