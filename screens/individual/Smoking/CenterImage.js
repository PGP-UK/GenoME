import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const CenterImage = withSizeInfo(({ sizeSelector, data, ...props }) => {
  const ImageStyles = sizeSelector({ xs: styles.imageSm, md: styles.imageMd });
  const imageWidth = Math.round(useSafeAreaFrame().width * 0.8) - 40;
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.5);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <Section stretch style={[{ backgroundColor: data.themeColor }]}>
      <Block>
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
          }}>
          <Image
            {...props}
            style={[ImageStyles, { width: finalImageWidth }]}
            resizeMode="contain"
          />
        </View>
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  imageMd: {
    alignSelf: 'center',
    marginTop: 20,
  },
  imageSm: {
    alignSelf: 'center',
  },
});

export default CenterImage;
