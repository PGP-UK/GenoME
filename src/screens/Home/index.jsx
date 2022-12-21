import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Section } from 'react-native-responsive-layout';

import PageLayout from '../../components/PageLayout';
import { PageText } from '../../components/Text';
import DataContext from '../../Context/DataContext'

import HeaderRow from './HeaderRow';
import Ambassadors from './Ambassadors';

const Home = (props) => {
  const { navigation } = props;
  const { setModalId } = useContext(DataContext);

  return (
    <>
      <PageLayout>
        <HeaderRow navigation={navigation} HeaderStyle={styles.headerRow} />
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
    marginBottom: 20,
  },
  pop_up_links: {
    color: '#63BEE1',
    paddingTop: 5,
  },
});

export default Home;
