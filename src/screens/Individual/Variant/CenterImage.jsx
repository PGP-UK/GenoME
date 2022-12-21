import React from "react";
import { StyleSheet, View } from "react-native";
import { Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import FastImage from '@cuvent/react-native-fast-image';

const CenterImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { image } = props;
  const ImageStyles = sizeSelector({ xs: styles.imageSm, md: styles.imageMd });
  const imageWidth = Math.round(useSafeAreaFrame().width * 0.8) - 40;
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <Section stretch>
      <Block>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <FastImage
            source={image}
            resizeMode={FastImage.resizeMode.contain}
            style={[
              ImageStyles,
              { width: finalImageWidth, height: finalImageWidth },
            ]}
          />
        </View>
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  imageMd: {
    alignSelf: "center",
    marginTop: -50,
  },
  imageSm: {
    alignSelf: "center",
  },
});

export default CenterImage;
