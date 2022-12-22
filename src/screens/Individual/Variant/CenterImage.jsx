import React, { useRef, useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import Lottie from 'lottie-react-native';

import LottieReset from '../../../components/LottieReset';

const CenterImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { image } = props;
  const lottieRef = useRef();
  const [displayReset, setDisplayReset] = useState(false);

  const imageWidth = Math.round(useSafeAreaFrame().width * 0.8) - 40;
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <Section stretch>
      <Block>
        <LottieReset lottieRef={lottieRef} displayReset={displayReset}/>
        <View>
          <Lottie
            ref={lottieRef}
            source={image}
            autoPlay
            loop={false}
            progress={1}
            style={{
              width: finalImageWidth + 100,
              height: finalImageWidth + 100,
              alignSelf: 'center',
              alignContent: 'center',
              justifyContent: 'center',
            }}
            onAnimationFinish={() => {
              setDisplayReset(true);
            }}
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
