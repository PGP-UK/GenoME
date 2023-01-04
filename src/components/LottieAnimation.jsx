import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';

import LottieReset from './LottieReset';

const LottieAnimation = withSizeInfo(({ sizeSelector, ...props }) => {
  const { image, imagePercentages } = props;
  const lottieRef = useRef();
  const [displayReset, setDisplayReset] = useState(false);

  const imagePercentage = sizeSelector(imagePercentages);
  const imageWidth = Math.round(useSafeAreaFrame().width * imagePercentage);
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <>
      <LottieReset lottieRef={lottieRef} displayReset={displayReset} />
      <Lottie
        ref={lottieRef}
        source={image}
        autoPlay
        loop={false}
        progress={1}
        style={[
          { width: finalImageWidth, height: finalImageWidth },
          styles.lottie,
        ]}
        onAnimationFinish={() => setDisplayReset(true)}
      />
    </>
  );
});

const styles = StyleSheet.create({
  lottie: {
    alignSelf: 'center',
    justifySelf: 'center',
  },
});

export default LottieAnimation;
