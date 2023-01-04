import React from 'react';
import { StyleSheet } from 'react-native';
import { PageText, PgpText } from '../../../components/Text';

const BoxText = ({ themeColor }) => (
  <PageText style={[styles.box, { backgroundColor: themeColor }]}>
    Epigenetic variants are chemical changes to your DNA, which alter how it is
    used without changing the DNA sequence. When people smoke, their epigenetic
    patterns change and we can use this to predict if they are past/never or
    current smokers.
  </PageText>
);

const InfoText = () => (
  <PgpText
    category="p1"
    sizeSelectorStyles={{ xs: styles.textXs, md: styles.texMd }}>
    The smoking prediction was calculated from 187 epigenetic variants across
    the participant's genome. These variants have been found to change when
    people smoke, and because of this, can be used to predict their smoking
    status.
  </PgpText>
);

const ImageKey = ({ data, themeColor }) => (
  <PgpText
    category="p1"
    baseStyle={styles.imageKeyWrapper}
    sizeSelectorStyles={{ xs: styles.textRowSm, md: {} }}>
    <PageText style={styles.actual}>
      My epigenetic variants{' '}
      <PageText style={[styles.actual, { color: themeColor }]}>
        {data.predicted_status == data.actual_status ? 'correctly' : 'incorrectly'}
      </PageText>
      {' '}predicted me to be a:{"\n"}
      <PageText style={[styles.actual, { color: themeColor }]}>
        {data.predicted_status}
      </PageText>
    </PageText>
  </PgpText>
);

const styles = StyleSheet.create({
  textXs: {
    color: '#666E7A',
    fontSize: 20,
  },
  texMd: {
    fontSize: 23,
  },

  box: {
    color: 'white',
    fontWeight: '400',
    padding: 10,
    marginTop: 10,
    maxWidth: 500,
    alignSelf: 'center',
  },
  textRowSm: {
    marginTop: 20,
  },
  imageKeyWrapper: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  actual: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
  },
  epigenetic: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
    color: '#11b6d4',
  },
});

export { BoxText, InfoText, ImageKey };
