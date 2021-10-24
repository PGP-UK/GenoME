import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';

const TopSection = withSizeInfo(({ sizeSelector, data }) => {
  const rowStyles = sizeSelector({
    xs: styles.textRowSm,
    md: styles.textRowMd,
  });

  return (
    <Section>
      <Block>
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: '200',
  },
  main: {
    marginTop: 10,
    marginBottom: 20,
  },
  textRowSm: {
    marginTop: 20,
  },
  textRowMd: {},
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
});

export default TopSection;
