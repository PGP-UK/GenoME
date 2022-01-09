import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';

const ImageKey = withSizeInfo(({ sizeSelector, data }) => {
  const rowStyles = sizeSelector({
    xs: styles.textRowSm,
    md: styles.textRowMd,
  });

  return (
    <Block xsSize="100%" style={rowStyles}>
      <Text style={[styles.actual, { color: data.themeColor }]}>
        Actual Age: {data.Age} Years
      </Text>
      <Text style={styles.epigenetic}>
        Epigenetic Age: {data.Epigenetic} Years
      </Text>
    </Block>
  );
});

const styles = StyleSheet.create({
  textRowSm: {
    marginTop: 20,
  },
  actual: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
  },
  epigenetic: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
    color: '#11b6d4',
  },
});

export default ImageKey;
