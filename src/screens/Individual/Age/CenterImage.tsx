import React from "react";
import { StyleSheet, View } from "react-native";
import { Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import FastImage from "react-native-fast-image";

const CenterImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { image } = props;
  const imagePercentage = sizeSelector({ xs: 0.8, md: 0.8, xl: 0.8, xxl: 0.4 });
  const imageWidth =
    Math.round(useSafeAreaFrame().width * imagePercentage) - 40;
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <FastImage
        source={{
          uri: `https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets/images/age_pie_charts/${image}`,
        }}
        resizeMode={FastImage.resizeMode.contain}
        style={[
          styles.image,
          { width: finalImageWidth, height: finalImageWidth },
        ]}
      />
    </View>
  );
});

const CenterRow = ({ image }) => (
  <Block>
    <CenterImage image={image} />
  </Block>
);


const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    alignSelf: "center",
  },
});

export default CenterRow;
