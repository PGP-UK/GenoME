import React from 'react';
import { Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { StyleSheet, View } from 'react-native';

import { PageText, PgpText } from '../../../../components/Text';
import { PageHeader } from '../../../../components/Text';
import LottieAnimation from '../../../../components/LottieAnimation';

const MiddleSection = (props) => {
  const { data, image } = props;
  const backgroundColour = data.population.colour;
  return (
    <>
      <Block xsSize="100%" mdSize="50%" style={{ paddingBottom: 20 }}>
        <LottieAnimation
          image={image}
          imagePercentages={{ xs: 0.8, md: 0.3, xl: 0.4 }}
        />
        <PgpText
          category="c1"
          sizeSelectorStyles={{
            xs: styles.xsColorSplitText,
            md: styles.mdColorSplitText,
          }}>
          The colour split illustrates how common each variant type is in the
          population.
        </PgpText>
      </Block>

      {/* Smaller screens only */}
      <Block xsSize="100%" mdHidden>
        <VariantRisk riskData={data.risk} />
        <PageText
          style={[styles.box_text, { backgroundColor: backgroundColour }]}>
          There are three versions of this variant and {data.population.percent}{' '}
          of the population have the same variant as me. {'\n\n'}
          {data.message}
        </PageText>
      </Block>

      {/*  larger screens only */}
      <Block xsSize="100%" mdSize="50%" hidden mdVisible>
        <PageText
          style={[styles.box_text, { backgroundColor: backgroundColour }]}>
          There are three versions of this variant and {data.population.percent}{' '}
          of the population have the same variant as me. {'\n\n'}
          {data.message}
        </PageText>
        <VariantRisk riskData={data.risk} />
      </Block>
    </>
  );
};

const VariantRisk = withSizeInfo(({ sizeSelector, riskData }) => {
  const ImageStyles = sizeSelector({
    xs: styles.xsHeader3,
    md: styles.mdHeader3,
  });

  return (
    <>
      <Block style={styles.container}>
        <PageHeader category="h5" style={styles.header2}>
          Risk with each variant type:
        </PageHeader>
      </Block>

      <Block style={styles.container}>
        <View style={styles.squareWrapper}>
          <View style={styles.square1} />
          <PageHeader category="h6" style={ImageStyles}>
            {riskData.first}
          </PageHeader>
        </View>
        <View style={styles.squareWrapper}>
          <View style={styles.square2} />
          <PageHeader category="h6" style={ImageStyles}>
            {riskData.second}
          </PageHeader>
        </View>
        <View style={styles.squareWrapper}>
          <View style={styles.square3} />
          <PageHeader category="h6" style={ImageStyles}>
            {riskData.third}
          </PageHeader>
        </View>
      </Block>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyItems: 'center',
  },
  header2: {
    color: '#666E7A',
    marginBottom: 3,
    marginTop: 10,
  },
  mdHeader3: {
    marginRight: 10,
    marginLeft: 3,
    fontSize: 22,
    color: '#666E7A',
  },
  xsHeader3: {
    marginRight: 10,
    marginLeft: 3,
    fontSize: 22,
    color: '#666E7A',
  },
  box_text: {
    color: 'white',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 450,
    alignSelf: 'center',
  },
  squareWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
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
  xsColorSplitText: {
    textAlign: 'center',
    color: '#666E7A',
    fontSize: 18,
  },
  mdColorSplitText: {
    maxWidth: 450,
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 60,
    color: '#666E7A',
    fontSize: 22,
  },
});

export default MiddleSection;
