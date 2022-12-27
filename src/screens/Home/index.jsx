import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import PageLayout from '../../components/PageLayout';
import { PageText } from '../../components/Text';
import HeaderRow from '../../components/HeaderRow';

import DataContext from '../../Context/DataContext'

import Ambassadors from './Ambassadors';

const Home = () => {
  const { setModalId } = useContext(DataContext);

  return (
    <>
      <PageLayout>
        <HeaderRow headerText="Personal Genome Project" btnText="MORE INFORMATION" btnLocation="About"/>
        <PageText style={styles.main_text}>
          The Personal Genome Project UK (PGP-UK) is a community of{' '}
          <PageText onPress={() => setModalId('active_participants')} style={styles.pop_up_links}>
            active participants{' '}
          </PageText>
          who share their genomes and personal data for research under{' '}
          <PageText onPress={() => setModalId('open_access')} style={styles.pop_up_links}>
            open access
          </PageText>
          .
        </PageText>

        <PageText style={styles.main_text}>
          Four PGP-UK participants have volunteered as ambassadors to share
          their identities and genomes to showcase the project.
        </PageText>

        <Ambassadors />
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  main_text: {
    marginBottom: 20,
  },
  pop_up_links: {
    color: '#63BEE1',
    paddingTop: 5,
  },
});

export default Home;
