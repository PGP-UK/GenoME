import React, { useRef, useState } from 'react';
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
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <>
      <LottieReset lottieRef={lottieRef} displayReset={displayReset} />
      <View style={{ alignContent: 'center', paddingLeft: 80 }}>
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
  return (
    <Section>
      <Block>
        <Iconimage image={image} />
      </Block>
    </Section>
  );
};

export default CenterImage;
