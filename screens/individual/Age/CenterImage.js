import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';


const CenterImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const imagePercentage = sizeSelector({ xs: 1, md: 0.4 })
  const imageWidth = Math.round(useSafeAreaFrame().width * imagePercentage) - 40;
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <Image
        {...props}
        style={[
          styles.image,
          { width: finalImageWidth, height: finalImageWidth },
        ]}
        resizeMode="contain"
      />
    </View>
  );
});


const CenterRow = ({ image, data }) => {
  return (
    <Section stretch>
      <Block hidden mdVisible md="30%" >

      </Block>
      <Block sm="100%" md="40%">
        <CenterImage source={image} />
      </Block>
    </Section >
  )
}

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    alignSelf: 'center',
  }
});

export default CenterRow;
