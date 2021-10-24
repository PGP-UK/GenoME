import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Block } from 'react-native-responsive-layout';

const AgeExplanationText = ({ themeColor }) => {
  return (
    <Block xsSize="100%" mdHidden>
      <Text style={[styles.paragraph, { backgroundColor: themeColor }]}>
        Epigenetic age was calculated from 353 epigenetic variants across the
        participant's genome. These epigenetic variants correlate very well
        with actual age, meaning they can be used as an 'epigenetic clock' to
        predict age. Age acceleration applies if the epigenetic age is 3.6
        years older than the actual age. Age deceleration applies if the
        epigenetic age is 3.6 years younger than their actual age.
      </Text>
    </Block>
  )
}
const styles = StyleSheet.create({
  paragraph: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
    padding: 10
  }
});


export default AgeExplanationText