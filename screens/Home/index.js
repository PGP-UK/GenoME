import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

import PageLayout from '../../components/PageLayout';
import HeaderRow from './HeaderRow';
import Ambassadors from './Ambassadors';
import {PageText} from '../../components/Text'

const Home = (props) => {
  const { navigation } = props;

  return (
    <>
      <PageLayout>
        <HeaderRow navigation={navigation} HeaderStyle={styles.headerRow} />
        <PageText style={styles.main_text}>
          The Personal Genome Project UK (PGP-UK) is a community of active
          participants who share their DNA sequence, medical records and trait
          data for reasearch under open access.
        </PageText>

        <PageText style={styles.main_text}>
          Four PGP-UK participants have volunteered as ambassadors to share
          their identities and genomes to showcase the project.
        </PageText>

        <PageText style={styles.main_text}>
          The Personal Genome Project UK (PGP-UK) is a community of active
          participants who share their DNA sequence, medical records and trait
          data for reasearch under open access.
        </PageText>

        <Ambassadors navigation={navigation} />
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    marginTop: 20,
    marginBottom: 25,
  },

  main_text: {
    marginBottom: 20,
  },
});

export default Home;
