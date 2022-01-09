import React from 'react';
import { Text } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { StyleSheet } from 'react-native';
import { PageHeader } from '../../../../components/Text';

const textInformation = {
  heart: {
    heading: 'Heart disease',
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
    <Section style={{ marginBottom: 20 }}>
      <Block smSize="100%" mdSize="70%">
        <PageHeader category="h1" style={styles.header1}>
          {textData.heading}
        </PageHeader>
        <PageHeader
          category="h2"
          style={[styles.header2, { color: data.themeColor }]}>
          Genetic variant ID: {textData.id}
        </PageHeader>
      </Block>
      <Block smSize="100%" mdSize="30%"></Block>
    </Section>
  );
};

const styles = StyleSheet.create({
  header1: {
    color: '#63BEE1',
    marginTop: 20,
  },
  header2: {
    marginTop: 5,
    fontSize: 30,
  },
});

export default TopSection;
