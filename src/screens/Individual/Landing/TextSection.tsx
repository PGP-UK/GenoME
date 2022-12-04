import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@ui-kitten/components';
import { Text, Card } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { TextModal } from '../../../components/Text';
import BackButton from '../../../components/BackButton';

const TextSection = withSizeInfo(({ sizeSelector, ...props }) => {
  const { navigation, themeColor } = props;
  const headerStyles = sizeSelector({
    xs: styles.headerxs,
    lg: styles.headerlg,
  });
  const subheaderStyles = sizeSelector({
    xs: styles.subheaderxs,
    lg: styles.subheaderlg,
  });
  const mainTextStyles = sizeSelector({
    xs: styles.main_textxs,
    lg: styles.main_textlg,
  });

  return (
    <Section>
      <Block style={{ flexDirection: 'row-reverse' }}>
        <BackButton navigation={navigation} />
      </Block>
      <Block xsSize="100%" lgSize="100%">
        <Text category="h1" style={headerStyles}>
          My GENOME contains many layers of INFORMATION, including GENETIC and
          EPIGENETIC information.
        </Text>
        <Text category="h5" style={subheaderStyles}>
          My DNA sequence is about 99.9% identical to other people's DNA. the
          remaining 0.1% is what makes me unique, which amounts to several
          million changes. These changes are called "genetic variants". The
          majority of variants are shared between individuals whilst others are
          private (in this case, unique to me or my family).
        </Text>
        <Card>
          <TextModal
            category="h5"
            style={[mainTextStyles, { color: themeColor }]}
            modal_text={
              'Genetic variants are changes in the DNA sequence; for example: TCCGA to TCTGA. \n\nA variant is defined as private (unique to me or my family) if it has not been recorded in any of the main public variant databases. \n\nEpigenetic variants are chemical changes to the DNA, which alter its function without changing the DNA sequence.'
            }>
            What is a PRIVATE, GENETIC, or EPIGENETIC variant?
          </TextModal>
        </Card>
        <Text category="h5" style={mainTextStyles}>
          Tap below to explore a few of my variants which we do know about.
        </Text>
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  headerxs: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '400',
    color: 'white',
  },
  headerlg: {
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 30,
    fontSize: 75,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
  // headermd: {
  //   marginTop: 30,
  //   marginBottom: 20,
  //   textAlign: 'center',
  //   fontWeight: '400',
  //   // color: 'white',
  //   fontSize: 35,
  // },
  subheaderxs: {
    marginTop: 10,

    fontSize: 25,
    fontWeight: '300',
    textAlign: 'center',
    color: 'white',
  },
  subheaderlg: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 35,
    fontWeight: '300',
    textAlign: 'center',
    color: 'white',
  },
  main_textxs: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  main_textlg: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  press_text: {
    backgroundColor: 'white',
  },
});

export default TextSection;
