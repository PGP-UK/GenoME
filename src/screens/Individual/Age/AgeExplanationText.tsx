import React from "react";
import { StyleSheet } from "react-native";
import { Block } from "react-native-responsive-layout";
import { PageText } from "../../../components/Text";

const AgeExplanationText = ({ themeColor }) => {
  return (
    <Block xsSize="100%" lgSize="100%">
      <PageText style={[styles.paragraph, { backgroundColor: themeColor }]}>
        Epigenetic age was calculated from 353 epigenetic variants across the
        participant's genome. These epigenetic variants correlate very well with
        actual age, meaning they can be used as an 'epigenetic clock' to predict
        age. Age acceleration applies if the epigenetic age is 3.6 years older
        than the actual age. Age deceleration applies if the epigenetic age is
        3.6 years younger than their actual age.
      </PageText>
    </Block>
  );
};
const styles = StyleSheet.create({
  paragraph: {
    color: "white",
    fontWeight: "400",
    padding: 10,
    marginTop: 10,
  },
});

export default AgeExplanationText;
