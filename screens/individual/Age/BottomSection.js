import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';

const BottomSection = withSizeInfo(({ sizeSelector, data }) => {
  const mainStyles = sizeSelector({
    xs: styles.mainSm,
    md: styles.mainMd,
  });

  const rowStyles = sizeSelector({
    xs: styles.textRowSm,
    md: styles.textRowMd,
  });
  const leftTextStyles = sizeSelector({
    xs: styles.leftTextSm,
    md: styles.leftTextMd,
  });
  const rightTextStyles = sizeSelector({
    xs: styles.rightTextSm,
    md: styles.rightTextMd,
  });

  return (
    <Section>
      <Block xsSize="100%" mdSize="50%" style={rowStyles}>
        <Text style={[styles.headline, { color: data.themeColor }]}>
          {data.Name}
        </Text>
      </Block>
      <Block xsSize="100%" mdSize="50%" style={rowStyles}>
        <Text style={[styles.actual, { color: data.themeColor }]}>
          Actual Age:{'\n'}
          {data.Age} Years{'\n'}
        </Text>
      </Block>
      <Block>
        <Text style={styles.epigenetic}>
          Epigenetic Age: {'\n'}
          {data.Epigenetic} Years
        </Text>
      </Block>
      <Block xsSize="100%" mdSize="50%" style={rowStyles}>
        <Text style={[styles.paragraph, { backgroundColor: data.themeColor }]}>
          Epigenetic age was calculated from 353 epigenetic variants across the
          participant's genome. These epigenetic variants correlate very well
          with actual age, meaning they can be used as an 'epigenetic clock' to
          predict age. Age acceleration applies if the epigenetic age is 3.6
          years older than the actual age. Age deceleration applies if the
          epigenetic age is 3.6 years younger than their actual age.
        </Text>
      </Block>
      <Block xsSize="100%" mdSize="50%" style={rowStyles}>
        <Text style={styles.footer}>
          Epigenetic variants are chemical changes to your DNA, which alter how
          it is used without changing the DNA sequence. As people age, their
          epigenetic patterns change and we can use this to predict a
          participant's epigenetic age. This predicted epigenetic age can be the
          same as the actual age, older (age acceleration) or younger (age
          deceleration).
        </Text>
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  mainSm: {
    marginTop: 10,
    marginBottom: 20,
  },
  mainMd: {
    marginTop: 10,
    marginBottom: 20,
  },
  textRowSm: {
    marginTop: 20,
  },
  leftTextSm: {
    fontSize: 35,
    color: '#45B0D4',
    textAlign: 'center',
  },
  leftTextMd: {
    fontSize: 35,
    color: '#45B0D4',
    textAlign: 'left',
  },
  rightTextSm: {
    fontSize: 35,
    textAlign: 'center',
  },
  rightTextMd: {
    fontSize: 35,
    textAlign: 'right',
  },
  headline: {
    fontSize: 30,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  actual: {
    fontSize: 30,
    marginBottom: 20,
  },
  epigenetic: {
    fontSize: 30,
    color: '#11b6d4',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  paragraph: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  footer: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default BottomSection;
