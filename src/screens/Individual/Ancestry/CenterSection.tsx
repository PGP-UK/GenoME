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
            height: finalImageWidth - 50,
            alignSelf: 'center',
          }}
          onAnimationFinish={() => {
            setDisplayReset(true);
          }}
        />
      </View>
      <Block xsSize="100%" mdSize="100%" style={styles.percent_box}>
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
  percent_box: {
    alignItems: 'center',
  },
});

export default CenterSection;
