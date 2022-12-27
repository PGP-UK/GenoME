import React from 'react';
import { StyleSheet } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';

import { PgpText } from '../../../components/Text';

const TextSection = ({ leftText, rightText, leftStyle, rightStyle }) => {
  const leftStyles = {
    xs: [styles.baseLeftText, styles.baseTextXs],
    md: [styles.baseLeftText]
  }
  const rightStyles = {
    xs: [styles.baseRightText, styles.baseRightTextXs, styles.baseTextXs],
    md: [styles.baseRightText]
  }

  return (
    <Grid>
      <Section>
        <Block xsSize="100%" mdSize="50%">
          <PgpText sizeSelectorStyles={leftStyles} style={leftStyle}>
            {leftText}
          </PgpText>
        </Block>
        <Block xsSize="100%" mdSize="50%">
          <PgpText sizeSelectorStyles={rightStyles} style={rightStyle}>
            {rightText}
          </PgpText>
        </Block>
      </Section>
    </Grid>
  );
};

const styles = StyleSheet.create({
  baseLeftText: {
    fontSize: 35,
    textAlign: 'left',
    color: '#45B0D4',
  },
  baseRightText: {
    fontSize: 35,
    textAlign: 'right',
  },
  baseTextXs: {
    textAlign: 'center'
  },
  baseRightTextXs: {
    marginTop: 15
  },
});

export default TextSection;
