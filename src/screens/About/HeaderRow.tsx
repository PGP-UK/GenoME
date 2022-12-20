import React from 'react';
import { StyleSheet } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { PageHeader } from '../../components/Text';
import BackButton from '../../components/BackButton';

const HeaderRow = ({navigation }) => {
  return (
    <Grid>
      <Section style={styles.headerRow}>
        <Block xsSize="100%" mdSize="80%">
          <PageHeader>About PGP-UK</PageHeader>
        </Block>
        <Block xsSize="100%" mdSize="20%" >
          <BackButton navigation={navigation} />
        </Block>
      </Section>
    </Grid>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    marginBottom: 10,
  }
});

export default HeaderRow;
