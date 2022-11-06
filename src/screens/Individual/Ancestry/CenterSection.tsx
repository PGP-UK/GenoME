import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { PageText } from '../../../components/Text';
import Lottie from 'lottie-react-native';
import LottieReset from '../../../components/LottieReset';

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
  });

  return (
    <>
      {/* Hidden in large screens */}
      <Block xlHidden>
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
      <Block xlHidden style={styles.percent_box}>
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
          }}>
          {data.other_percent_1}
        </PageText>
      </Block>

      {/* Visible in large screens */}
      <Block hidden xlVisible xlSize="60%" style={{ marginTop: -150 }}>
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
      <Block hidden xlVisible style={styles.percent_box} xlSize="40%">
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
    paddingLeft: '24%',
  },
  center_animation_lg: {
    paddingLeft: '11%',
  },
  center_animation_xl: {
    paddingLeft: '40%',
  },
  percent_box: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default CenterSection;
