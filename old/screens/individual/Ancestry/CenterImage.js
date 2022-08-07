import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const Iconimage = withSizeInfo(({ sizeSelector, ...props }) => {
  const numImagesPerRow = sizeSelector({ xs: 1, sm: 2, md: 4.8});
  const imageWidth = Math.round(useSafeAreaFrame().width / numImagesPerRow) - 0;
  return (
    <Image
      {...props}
      style={{ width: imageWidth, height: imageWidth }}
      resizeMode="contain"
    />
  );
});

const CenterImage = (props) => {
  return (
    <Section>
      <Block style={{ alignItems: 'center', marginTop: 50 }}>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Iconimage
            {...props}
            resizeMode="contain"
          />
        </View>
      </Block>
    </Section>
  );
};

const styles = StyleSheet.create({
  imageMd: {
    alignSelf: 'center',
  },
  imageSm: {
    alignSelf: 'center',
  },
});

export default CenterImage;
