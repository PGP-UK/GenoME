import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const Iconimage = withSizeInfo(({ sizeSelector, ...props }) => {
  const numImagesPerRow = sizeSelector({ xs: 1, sm: 2, md: 5 });
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
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <Iconimage
            {...props}
            // style={{
            //   width: '75%',
            //   marginTop: -80,
            //   marginBottom: -60,
            //   alignItems: 'center',
            // }}
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
