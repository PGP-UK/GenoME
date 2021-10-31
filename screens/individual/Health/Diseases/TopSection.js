import React from 'react';
import { Text } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { StyleSheet } from 'react-native';

const textInformation = {
  heart: {
    heading: 'Heart Disease',
    id: 'rs238206',
  },
  crohn: {
    heading: "Crohn's disease",
    id: 'rs2066847',
  },
  ovarian: {
    heading: 'Ovarian cancer',
    id: 'rs3218536',
  },
};

const TopSection = (props) => {
  const { disease, data } = props;
  const textData = textInformation[disease];
  return (
    <Section>
      <Block xsSize="100%" smSize="100%" mdSize="70%">
        <Text category="h1" style={styles.header}>
          {textData.heading}
        </Text>
      </Block>
      <Block xsSize="100%" smSize="100%" mdSize="30%">
        <Text category="h1" style={[styles.header, { color: data.themeColor }]}>
          Genetic variant ID: {'\n'}
          {textData.id}
        </Text>
      </Block>
    </Section>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#63BEE1',
    fontWeight: '400',
    marginTop: 20,
  },
});

export default TopSection;
