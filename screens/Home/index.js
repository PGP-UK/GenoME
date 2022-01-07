import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Section } from 'react-native-responsive-layout';

import PageLayout from '../../components/PageLayout';
import HeaderRow from './HeaderRow';
import Ambassadors from './Ambassadors';

const Home = (props) => {
  const { navigation } = props;

  return (
    <>
      <PageLayout>
        <HeaderRow navigation={navigation} HeaderStyle={styles.headerRow} />
        <Text category="p1" style={styles.main_text}>
          The Personal Genome Project UK (PGP-UK) is a community of active
          participants who share their DNA sequence, medical records and trait
          data for reasearch under open access.
        </Text>

        <Text category="p1" style={styles.main_text}>
          Four PGP-UK participants have volunteered as ambassadors to share
          their identities and genomes to showcase the project.
        </Text>

        <Text category="p1" style={styles.main_text}>
          The Personal Genome Project UK (PGP-UK) is a community of active
          participants who share their DNA sequence, medical records and trait
          data for reasearch under open access.
        </Text>

        <Section
          stretch
          style={{
            alignItems: 'center',
            alignContent: 'center',
            paddingBottom: 50,
          }}>
          <Ambassadors navigation={navigation} />
        </Section>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    marginBottom: 25,
  },

  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Home;
