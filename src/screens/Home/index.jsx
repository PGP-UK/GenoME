import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import PageLayout from '../../components/PageLayout';
import { PageText } from '../../components/Text';
import HeaderRow from '../../components/HeaderRow';

import DataContext from '../../Context/DataContext';

import Ambassadors from './Ambassadors';

const Home = () => {
  const { setModalId } = useContext(DataContext);
  const GenoMeSong = require('../../../assets/Music/GenoME.mp3');
  return (
    <>
      <PageLayout>
        <HeaderRow btnText="MORE INFORMATION" btnLocation="About">
          Personal Genome Project
        </HeaderRow>
        <PageText style={styles.main_text}>
          The Personal Genome Project UK (PGP-UK) is a community of{' '}
          <PageText
            onPress={() => setModalId('active_participants')}
            style={styles.pop_up_links}>
            active participants{' '}
          </PageText>
          who share their genomes and personal data for research under{' '}
          <PageText
            onPress={() => setModalId('open_access')}
            style={styles.pop_up_links}>
            open access
          </PageText>
          .
        </PageText>

        <PageText style={styles.main_text}>
          Four PGP-UK participants have volunteered as ambassadors to share
          their identities and genomes to showcase the project.
        </PageText>

        <Ambassadors />

        <PageText style={styles.footer_text}>
          Tap here to listen to 'GenoME' our ambassador's genetic code for their eye colour
        </PageText>
        <PageText style={styles.main_text}>
          GenoME' was performed by The Benyounes Quartet and composed by Deirdre Gribbin
        </PageText>
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
  footer_text: {
    color: '#63BEE1',
    paddingTop: 5,
  },
});

export default Home;
