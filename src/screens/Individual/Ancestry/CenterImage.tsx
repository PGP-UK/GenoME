import React from "react";
import { StyleSheet, View } from "react-native";
import { Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import FastImage from "react-native-fast-image";

const Iconimage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { image } = props;
  const numImagesPerRow = sizeSelector({ xs: 1, sm: 2, md: 4.8 });
  const imageWidth = Math.round(useSafeAreaFrame().width / numImagesPerRow) - 0;
  return (
    <FastImage
      source={{
        uri: `https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets/images/${image}`,
      }}
      resizeMode={FastImage.resizeMode.contain}
      style={{ width: imageWidth, height: imageWidth }}
    />
  );
});

const CenterImage = ({ image }) => {
  return (
    <Section>
      <Block style={{ alignItems: "center", marginTop: 50 }}>
        <View style={{ alignItems: "center", flex: 1 }}>
          <Iconimage image={`ancestry_screen_pie/${image}`} />
        </View>
      </Block>
    </Section>
  );
};

const styles = StyleSheet.create({
  imageMd: {
    alignSelf: "center",
  },
  imageSm: {
    alignSelf: "center",
  },
});

export default CenterImage;
