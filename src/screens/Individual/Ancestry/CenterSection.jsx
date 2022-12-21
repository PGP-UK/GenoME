import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';

import LottieReset from '../../../components/LottieReset';
import { PageText } from '../../../components/Text';

const Iconimage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { data, image } = props;
  const lottieRef = useRef();
  const [displayReset, setDisplayReset] = useState(false);
  const imagePercentage = sizeSelector({ xs: 1, xxl: 0.4 });
  const imageWidth = Math.round(useSafeAreaFrame().width * imagePercentage);
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 1);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;
  const center_animation_style = sizeSelector({
    xs: styles.center_animation_xs,
    lg: styles.center_animation_lg,
    xl: styles.center_animation_xl,
    xxl: styles.center_animation_xxl,
  });

  return (
    <>
      {/* Hidden in large screens */}
      <Block lgHidden>
        <LottieReset lottieRef={lottieRef} displayReset={displayReset}/>
        <View style={center_animation_style}>
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
              justifyContent: 'center',
            }}
            onAnimationFinish={() => {
              setDisplayReset(true);
            }}
          />
        </View>
      </Block>
      <Block lgHidden style={styles.percent_box}>
        <PageText
          style={{
            fontSize: 45,
            color: data.themeColor,
          }}>
          {data.most_percent}
        </PageText>
        <PageText
          style={{
            fontSize: 45,
            color: data.themeColor,
            marginTop: 15,
            marginBottom: 75,
          }}>
          {data.other_percent_1}
        </PageText>
      </Block>

      {/* Visible in large screens */}
      <Block hidden lgVisible lgSize="50%" style={{ marginTop: -75 }}>
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
              justifyContent: 'center',
            }}
            onAnimationFinish={() => {
              setDisplayReset(true);
            }}
          />
        </View>
      </Block>
      <Block hidden lgVisible style={styles.percent_box} lgSize="50%">
        <PageText
          style={{
            fontSize: 45,
            color: data.themeColor,
          }}>
          {data.most_percent}
        </PageText>
        <PageText
          style={{
            fontSize: 45,
            color: data.themeColor,
            marginTop: 15,
            marginBottom: 75,
          }}>
          {data.other_percent_1}
        </PageText>
      </Block>
    </>
  );
});

const CenterSection = ({ image, data }) => {
  return <Iconimage data={data} image={image} />;
};

const styles = StyleSheet.create({
  center_animation_xs: {
    paddingLeft: '30%',
  },
  center_animation_lg: {
    paddingLeft: '45%',
  },
  center_animation_xl: {
    paddingLeft: '50%',
  },
  center_animation_xxl: {
    paddingLeft: '10%',
  },
  percent_box: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default CenterSection;
