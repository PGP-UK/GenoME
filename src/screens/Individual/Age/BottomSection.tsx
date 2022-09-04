import React from "react";
import { StyleSheet } from "react-native";
import { Grid, Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { PageText } from "../../../components/Text";

import ImageKey from "./ImageKey";
import AgeExplanationText from "./AgeExplanationText";

const BottomSection = withSizeInfo(({ sizeSelector, data }) => {
  const rowStyles = sizeSelector({
    xs: styles.textRowSm,
    md: styles.textRowMd,
  });

  return (
    <Grid>
      <Section>
        <ImageKey data={data} />
        <Block smHidden mdHidden>
          <AgeExplanationText themeColor={data.themeColor} />
        </Block>
        <Block xsSize="100%" style={rowStyles}>
          <PageText style={styles.footer}>
            Epigenetic variants are chemical changes to your DNA, which alter
            how it is used without changing the DNA sequence. As people age,
            their epigenetic patterns change and we can use this to predict a
            participant's epigenetic age. This predicted epigenetic age can be
            the same as the actual age, older (age acceleration) or younger (age
            deceleration).
          </PageText>
        </Block>
      </Section>
    </Grid>
  );
});

const styles = StyleSheet.create({
  textRowSm: {
    marginTop: 20,
  },
  footer: {
    color: "#666E7A",
    padding: 10,
  },
});

export default BottomSection;
