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
        <Section>
         <Block
            xsSize="100%"
            smSize="100%"
            mdSize="100%"
            lgSize="100%"
            xlSize="100%"
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              paddingBottom: 20,
            }}
            xsVisible
            smVisible
            mdHidden
            xlHidden
            xxlHidden
          >
            <AgeExplanationText themeColor={data.themeColor} />
          </Block>
        </Section>
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
    paddingBottom: 25,
  },
});

export default BottomSection;
