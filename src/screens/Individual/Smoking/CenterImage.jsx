import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import FastImage from '@cuvent/react-native-fast-image';

const CenterImage = withSizeInfo(({ sizeSelector, data, ...props }) => {
  const { image } = props;
  const imagePercentage = sizeSelector({
    xs: 0.8,
    md: 0.8,
    xl: 0.65,
    xxl: 0.4,
  });
  const imageWidth =
    Math.round(useSafeAreaFrame().width * imagePercentage) - 40;
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <View style= {{ justifyContent: "center", flex: 1,}}>
      <Image
        source={image}
        resizeMode={FastImage.resizeMode.contain}
        style={[
          styles.image, {tintColor: data.themeColor,},
          { width: finalImageWidth, height: finalImageWidth,},
        ]}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    alignSelf: "center",
  },
});

export default CenterImage;