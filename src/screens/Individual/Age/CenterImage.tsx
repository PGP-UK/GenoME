import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';
import LottieReset from '../../../components/LottieReset';

const CenterImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const lottieRef = useRef();
  const [displayReset, setDisplayReset] = useState(false);

  const { image } = props;
  const imagePercentage = sizeSelector({ xs: 0.8, md: 0.8, xl: 0.8, xxl: 0.4 });
  const imageWidth = Math.round(useSafeAreaFrame().width * imagePercentage);
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;
  const imagePadding = sizeSelector({
    xs: '10%',
    md: '22%',
    lg: '22%',
    xxl: '10%',
  });

  return (
    <>
      <LottieReset lottieRef={lottieRef} displayReset={displayReset} />
      <View
        style={{
          alignContent: 'center',
        }}>
        <Lottie
          ref={lottieRef}
          source={image}
          autoPlay
          loop={false}
          progress={1}
          style={[
            styles.image,
            {
              width: finalImageWidth,
              height: finalImageWidth,
              paddingLeft: imagePadding,
            },
          ]}
          onAnimationFinish={() => {
            setDisplayReset(true);
          }}
        />
      </View>
    </>
  );
});

const CenterRow = ({ image }) => (
  <Block>
    <CenterImage image={image} />
  </Block>
);

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
  },
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
});

export default CenterRow;
