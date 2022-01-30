import React from 'react';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { StyleSheet, View, Image } from 'react-native';
import { PageText } from '../../../../components/Text';
import { PageHeader } from '../../../../components/Text';

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

const ColorSplitText = withSizeInfo(({ sizeSelector }) => {
  const ColorSplitStyles = sizeSelector({
    xs: styles.xsColorSplitText,
    md: styles.mdColorSplitText,
  });
  return (
    <PageText style={ColorSplitStyles}>
      The colour split illustrates how common each variant type is in the
      population.
    </PageText>
  );
});

const VariantRisk = withSizeInfo(({ sizeSelector, riskData }) => {
  const ImageStyles = sizeSelector({
    xs: styles.xsHeader3,
    md: styles.mdHeader3,
  });

  return (
    <View>
      <PageText style={styles.header2}>Risk with each variant type:</PageText>
      <PageHeader category="h4" style={ImageStyles}>
        <View style={styles.square1} />
        &nbsp;
        {riskData.first}
      </PageHeader>
      <PageHeader category="h4" style={ImageStyles}>
        <View style={styles.square2} />
        &nbsp;
        {riskData.second}
      </PageHeader>
      <PageHeader category="h4" style={ImageStyles}>
        <View style={styles.square3} />
        &nbsp;
        {riskData.third}
      </PageHeader>
      {/* Hidden in small screens */}
      <Block hidden mdVisible>
        <ColorSplitText />
      </Block>
    </View>
  );
});

const MiddleSection = (props) => {
  const { data, image } = props;
  const backgroundColour = data.population.colour;
  return (
    <>
      <Section
        stretch
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          flexWrap: 'wrap',
        }}>
        {/* Hidden in large screens */}
        <Block mdHidden>
          <ColorSplitText />
        </Block>

        {/* Hidden in small screens */}
        <Block xsSize="100%" mdSize="33%" hidden mdVisible>
          <VariantRisk riskData={data.risk} />
        </Block>

        <Block xsSize="100%" mdSize="33%" style={{ paddingBottom: 20 }}>
          <AmbassadorImage source={image} />
        </Block>

        {/* Hidden in small screens */}
        <Block xsSize="100%" mdSize="33%" mdHidden>
          <VariantRisk riskData={data.risk} />
        </Block>

        <Block xsSize="100%" mdSize="33%" style={{ paddingTop: 30 }}>
          <PageText
            style={[styles.box_text, { backgroundColor: backgroundColour }]}>
            There are three versions of this variant and{' '}
            {data.population.percent} of the population have the same variant as
            me. {'\n'}
            {'\n'}
            {data.message}
          </PageText>
        </Block>
      </Section>
    </>
  );
};

const styles = StyleSheet.create({
  header2: {
    color: '#666E7A',
    marginBottom: 10,
  },
  mdHeader3: {
    fontSize: 25,
    color: '#666E7A',
  },
  xsHeader3: {
    fontSize: 25,
    color: '#666E7A',
  },
  main_text: {
    color: '#666E7A',
    marginBottom: 20,
  },
  box_text: {
    color: 'white',
    padding: 10,
    marginBottom: 20,
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
  xsColorSplitText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666E7A',
  },
  mdColorSplitText: {
    marginTop: 20,
    color: '#666E7A',
  },
});

export default MiddleSection;
