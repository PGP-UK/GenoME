import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';

import ImageKey from './ImageKey';
import AgeExplanationText from './AgeExplanationText';

const BottomSection = withSizeInfo(({ sizeSelector, data }) => {
  const rowStyles = sizeSelector({
    xs: styles.textRowSm,
    md: styles.textRowMd,
  });

  return (
    <Grid>
      <Section>
        <ImageKey data={data} />
        <Block hidden mdVisible >
          <AgeExplanationText themeColor={data.themeColor} />
        </Block>
        <Block xsSize="100%" style={rowStyles}>
          <Text style={styles.footer}>
            Epigenetic variants are chemical changes to your DNA, which alter how
            it is used without changing the DNA sequence. As people age, their
            epigenetic patterns change and we can use this to predict a
            participant's epigenetic age. This predicted epigenetic age can be the
            same as the actual age, older (age acceleration) or younger (age
            deceleration).
          </Text>
        </Block>
      </Section >
    </Grid>
  );
});

const styles = StyleSheet.create({
  textRowSm: {
    marginTop: 20,
  },
  footer: {
    fontSize: 20,
  },
});

export default BottomSection;
