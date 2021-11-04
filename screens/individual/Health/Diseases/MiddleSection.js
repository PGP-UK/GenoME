import React from 'react';
import { Text, Card } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { StyleSheet, View, Image } from 'react-native';

const AmbassadorImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const ImageStyles = sizeSelector({ xs: styles.imageSm, md: styles.imageMd });
  const ImagePercent = sizeSelector({ xs: 0.8, md: 0.3 });
  const imageWidth = Math.round(useSafeAreaFrame().width * ImagePercent) - 40;
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <Image
      {...props}
      style={[ImageStyles, { width: finalImageWidth, height: finalImageWidth }]}
      // resizeMode="contain"
    />
  );
});

const VariantRisk2 = withSizeInfo(({ sizeSelector, riskData }) => {
  const ImageStyles = sizeSelector({
    xs: styles.xsHeader3,
    md: styles.mdHeader3,
  });
  return (
    <Block xsSize="100%" mdSize="33%" style={{ paddingBottom: 50 }}>
      <Text category="h1" style={styles.header2}>
        Risk with each variant type:
      </Text>
      <Text category="h1" style={ImageStyles}>
        <View style={styles.square1} />
        {riskData.first}
      </Text>
      <Text category="h1" style={ImageStyles}>
        <View style={styles.square2} />
        {riskData.second}
      </Text>
      <Text category="h1" style={ImageStyles}>
        <View style={styles.square3} />
        {riskData.third}
      </Text>
    </Block>
  );
});

const VariantRisk = ({ riskData }) => (
  <Block xsSize="100%" mdSize="33%" style={{ paddingBottom: 50 }}>
    <Text category="h1" style={styles.header2}>
      Risk with each variant type:
    </Text>
    <Text category="h1" style={styles.header3}>
      <View style={styles.square1} />
      {riskData.first}
    </Text>
    <Text category="h1" style={styles.header3}>
      <View style={styles.square2} />
      {riskData.second}
    </Text>
    <Text category="h1" style={styles.header3}>
      <View style={styles.square3} />
      {riskData.third}
    </Text>
  </Block>
);

const MiddleSection = (props) => {
  const { data, image } = props;
  const backgroundColour = data.population.colour;
  return (
    <>
      <Section>
        <VariantRisk2 riskData={data.risk} smHidden />
        <Block xsSize="100%" mdSize="33%" style={{ paddingBottom: 50 }}>
          <AmbassadorImage source={image} />
        </Block>
        {/* <VariantRisk variantRisk={data.risk} smHidden /> */}
        <Block xsSize="100%" mdSize="33%">
          <Text
            style={[styles.box_text, { backgroundColor: backgroundColour }]}>
            There are three versions of this variant and{' '}
            {data.population.percent} of the population have the same variant as
            me. {'\n'}
            {'\n'}
            {data.message}
          </Text>
          <Block>
            <Text category="p1" style={styles.main_text}>
              The colour split illustrates how common each variant type is in
              the population.
            </Text>
          </Block>
        </Block>
      </Section>
    </>
  );
};

const styles = StyleSheet.create({
  header2: {
    color: '#666E7A',
    fontWeight: '400',
  },
  mdHeader3: {
    color: '#666E7A',
    fontWeight: '400',
    fontSize: 30,
  },
  xsHeader3: {
    color: '#666E7A',
    fontWeight: '400',
  },
  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
  box_text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
    padding: 10,
    marginBottom: 50,
  },
  square1: {
    width: 25,
    height: 25,
    backgroundColor: '#977ABD',
  },
  square2: {
    width: 25,
    height: 25,
    backgroundColor: '#34BC99',
  },
  square3: {
    width: 25,
    height: 25,
    backgroundColor: '#F6BB41',
  },
  imageMd: {
    alignSelf: 'center',
    // marginTop: -50,
  },
  imageSm: {
    alignSelf: 'center',
  },
});

export default MiddleSection;
