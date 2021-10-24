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
        <Text style={[styles.actual, { color: data.themeColor }]}>
          My epigenetic variants correctly predicted me to be a:{'\n'}
          {data.smoker}
        </Text>
      </Block>
      <Block xsSize="100%" mdSize="50%" style={rowStyles}>
        <Text style={[styles.actual, { color: data.themeColor }]}>
          Actual Smoking status:{'\n'}
          {data.smoker}
          {'\n'}
        </Text>
      </Block>
      <Block xsSize="100%" mdSize="50%" style={rowStyles}>
        <Text style={styles.text}>
          Epigenetic variants are chemical changes to your DNA, which alter how
          it is used without changing the DNA sequence. When people smoke, their
          epigenetic patterns change and we can use this to predict if they are
          past/never or current smokers.
        </Text>
      </Block>
      <Block xsSize="100%" mdSize="50%" style={rowStyles}>
        <Text style={styles.text}>
          The smoking prediction was calculated from 187 epigenetic variants
          across the participant's genome. These variants have been found to
          change when people smoke, and because of this, can be used to predict
          their smoking status.
        </Text>
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  mainSm: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'column-reverse',
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
  text: {
    fontSize: 20,
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
