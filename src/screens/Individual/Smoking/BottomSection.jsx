import React from "react";
import { StyleSheet } from "react-native";
import { Grid, Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";

import { PageText } from "../../../components/Text";

const BottomSection = withSizeInfo(({ sizeSelector }) => {
  const rowStyles = sizeSelector({
    xs: styles.textRowSm,
    md: styles.textRowMd,
  });

  return (
    <Grid>
      <Section>
        <Block xsSize="100%" style={rowStyles}>
          <PageText style={styles.footer}>
            The smoking prediction was calculated from 187 epigenetic variants
            across the participant's genome. These variants have been found to
            change when people smoke, and because of this, can be used to
            predict their smoking status.
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
    fontSize: 20,
    fontWeight: "300",
    paddingBottom: 25,
  },
});

export default BottomSection;
