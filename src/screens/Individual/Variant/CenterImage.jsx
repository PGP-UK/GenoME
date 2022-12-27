import React, { useRef, useState } from 'react';
import { StyleSheet } from "react-native";
import { Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import Lottie from 'lottie-react-native';

import LottieReset from '../../../components/LottieReset';

const CenterImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { image } = props;
  const lottieRef = useRef();
  const [displayReset, setDisplayReset] = useState(false);

  const heightPadding = sizeSelector({ xs: 0, xl: 200})

  const imageWidth = Math.round(useSafeAreaFrame().width * 0.8) - 40;
  const maxImageHeight = (Math.round(useSafeAreaFrame().height * 0.8) - heightPadding);
  const finalImageWidth = imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <Section>
      <Block>
        <LottieReset lottieRef={lottieRef} displayReset={displayReset}/>
        <Lottie
          ref={lottieRef}
          source={image}
          autoPlay
          loop={false}
          progress={1}
          style={[{width: finalImageWidth,height: finalImageWidth,}, styles.image]}
          onAnimationFinish={ () => setDisplayReset(true) }
        />
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  }
});

export default CenterImage;
