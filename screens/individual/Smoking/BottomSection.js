import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';

import ImageKey from './Imagekey.js';
import SmokingExText from './SmokingExText';
import { PageText } from '../../../components/Text';

const dataFile = {
  data: require(`../../../assets/data/age/data.json`),
};

const BottomSection = withSizeInfo(({ sizeSelector, data, name }) => {
  const mainStyles = sizeSelector({
    xs: styles.mainSm,
    md: styles.mainMd,
  });
  const rowStyles = sizeSelector({
    xs: styles.textRowSm,
    md: styles.textRowMd,
  });
  const leftTextStyles = sizeSelector({
    xs: styles.leftTextSm,
    md: styles.leftTextMd,
  });
  const rightTextStyles = sizeSelector({
    xs: styles.rightTextSm,
    md: styles.rightTextMd,
  });

  return (
    <Grid>
      <Section>
        <ImageKey data={data} />
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
  mainSm: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'column-reverse',
  },
  mainMd: {
    marginTop: 10,
    marginBottom: 20,
  },
  textRowSm: {
    marginTop: 20,
  },
  leftTextSm: {
    fontSize: 35,
    color: '#45B0D4',
    textAlign: 'center',
  },
  leftTextMd: {
    fontSize: 35,
    color: '#45B0D4',
    textAlign: 'left',
  },
  rightTextSm: {
    fontSize: 35,
    textAlign: 'center',
  },
  rightTextMd: {
    fontSize: 35,
    textAlign: 'right',
  },
  headline: {
    fontSize: 30,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  actual: {
    fontSize: 30,
    fontWeight: '300',
    color: '#11b6d4',
    padding: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '300',
    padding: 10,
  },
  paragraph: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  footer: {
    color: '#666E7A',
    fontSize: 20,
    fontWeight: '300',
  },
});

export default BottomSection;
