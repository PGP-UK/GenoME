import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';
import LottieReset from '../../../components/LottieReset';

const Iconimage = withSizeInfo(({ sizeSelector, ...props }) => {
  const lottieRef = useRef();
  const [displayReset, setDisplayReset] = useState(false);
  const { image } = props;
  const imagePercentage = sizeSelector({ xs: 1, xxl: 0.4 });
  const imageWidth = Math.round(useSafeAreaFrame().width * imagePercentage);
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 1);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;
  const center_animation_style = sizeSelector({
    xs: styles.center_animation_xs,
    md: styles.center_animation_md,
    lg: styles.center_animation_lg,
    xxl: styles.center_animation_xxl,
  });

  return (
    <>
      <LottieReset lottieRef={lottieRef} displayReset={displayReset} />
      <View style={center_animation_style}>
        <Lottie
          ref={lottieRef}
          source={image}
          autoPlay
          loop={false}
          progress={1}
          style={{
            width: finalImageWidth,
            height: finalImageWidth,
            alignSelf: 'center',
          }}
          onAnimationFinish={() => {
            setDisplayReset(true);
          }}
        />
      </View>
    </>
  );
});

const CenterImage = ({ image }) => {
  return <Iconimage image={image} />;
};

const styles = StyleSheet.create({
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

export default CenterImage;
