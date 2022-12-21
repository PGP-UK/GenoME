import React from 'react';
import { StyleSheet } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';

import { PageHeader } from '../../components/Text';
import BackButton from '../../components/BackButton';

const HeaderRow = withSizeInfo(({ sizeSelector, navigation, HeaderStyle }) => {
  const btnStyles = sizeSelector({
    xs: styles.headerBtnLayoutXs,
    md: styles.headerBtnLayoutMd,
  });

  return (
    <Grid>
      <Section style={HeaderStyle}>
        <PageHeader>About PGP-UK</PageHeader>
        <Block xsSize="100%" mdSize="20%" style={{ paddingBottom: 25 }}>
          <BackButton style={{btnStyles}} navigation={navigation} />
        </Block>
      </Section>
    </Grid>
  );
});

const styles = StyleSheet.create({
  headerBtnLayoutXs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  headerBtnLayoutMd: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default HeaderRow;
