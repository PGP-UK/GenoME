import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Block } from 'react-native-responsive-layout';
import { PageText } from '../../../components/Text';

const SmokingExText = ({ data }) => {
  return (
    <>
      <Block xsSize="100%" mdHidden>
        <PageText style={[styles.text, { backgroundColor: data.themeColor }]}>
          Epigenetic variants are chemical changes to your DNA, which alter how
          it is used without changing the DNA sequence. When people smoke, their
          epigenetic patterns change and we can use this to predict if they are
          past/never or current smokers.
        </PageText>
      </Block>
    </>
  );
};
const styles = StyleSheet.create({
  paragraph: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
    padding: 10,
  },
  actual: {
    fontSize: 30,
    marginBottom: 20,
  },
  text: {
    //fontSize: 20,
    marginBottom: 20,
    //fontWeight: '300',
    color: 'white',
    padding: 10,
  },
});

export default SmokingExText;
