import React from 'react';
import { Text } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { StyleSheet } from 'react-native';

const TopSection = (props) => {
  const { disease, data } = props;
  if (disease === 'heart') {
    return (
      <Section style={{ paddingBottom: 50 }}>
        <Block xsSize="100%" smSize="100%" mdSize="70%">
          <Text category="h1" style={styles.header}>
            Heart Disease
          </Text>
        </Block>
        <Block xsSize="100%" smSize="100%" mdSize="30%">
          <Text
            category="h1"
            style={(styles.header, { color: data.themeColor })}>
            Genetic variant ID: {'\n'}rs238206
          </Text>
        </Block>
      </Section>
    );
  }
  if (disease === 'crohn') {
    return (
      <Section style={{ paddingBottom: 50 }}>
        <Block xsSize="100%" smSize="100%" mdSize="70%">
          <Text category="h1" style={styles.header}>
            Crohn's disease
          </Text>
        </Block>
        <Block xsSize="100%" smSize="100%" mdSize="30%">
          <Text
            category="h1"
            style={(styles.header, { color: data.themeColor })}>
            Genetic variant ID: {'\n'}rs2066847
          </Text>
        </Block>
      </Section>
    );
  }
  if (disease === 'ovarian') {
    return (
      <Section style={{ paddingBottom: 50 }}>
        <Block xsSize="100%" smSize="100%" mdSize="70%">
          <Text category="h1" style={styles.header}>
            Ovarian disease
          </Text>
        </Block>
        <Block xsSize="100%" smSize="100%" mdSize="30%">
          <Text
            category="h1"
            style={(styles.header, { color: data.themeColor })}>
            Genetic variant ID: {'\n'}rs3218536
          </Text>
        </Block>
      </Section>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    color: '#63BEE1',
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 25,
  },
});

export default TopSection;
