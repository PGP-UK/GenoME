import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import { Section } from 'react-native-responsive-layout';
import PageLayout from '../../components/PageLayout';
import HeaderRow from './HeaderRow';
import Ambassadors from './Ambassadors';
import { PageText, PageFooter, TextModal } from '../../components/Text';

const Home = (props) => {
  const { navigation } = props;

  return (
    <>
      <PageLayout>
        <HeaderRow navigation={navigation} HeaderStyle={styles.headerRow} />
        <PageText style={styles.main_text}>
          The Personal Genome Project UK (PGP-UK) is a community of{' '}
          <TextModal
            style={styles.pop_up_links}
            modal_text={
              'PGP-UK encourages its participants to be active and to engage in Citizen Science by taking on the roles of both subject and scientist.'
            }>
            active participants{' '}
          </TextModal>
          who share their DNA sequence, medical records and trait data for
          reasearch under{' '}
          <TextModal
            style={styles.pop_up_links}
            modal_text={
              'PGP-UK defines open access as non-restrictive access and usage of data released by the project.\n\nThis means the data is freely available to everyone.'
            }>
            open access
          </TextModal>
          .
        </PageText>

        <PageText style={styles.main_text}>
          Four PGP-UK participants have volunteered as ambassadors to share
          their identities and genomes to showcase the project.
        </PageText>

        <PageText style={styles.main_text}>
          The Personal Genome Project UK (PGP-UK) is a community of active
          participants who share their DNA sequence, medical records and trait
          data for research under open access.
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
        {/* 
        <Section style={{ flex: 1, flexWrap: "wrap" }}>
          <PageFooter style={styles.top_footer_text}>
            Tap here to listen to 'GenoME' our ambassador's genetic code for
            their eye colour.
          </PageFooter>
          <PageFooter style={styles.bottom_footer_text}>
            'GenoME' was peformed by The Benyounes Quartet and composed by
            Deidre Gribbin.
          </PageFooter>
        </Section>
        */}
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
  top_footer_text: {
    color: '#63BEE1',
  },
  bottom_footer_text: {
    color: '#666E7A',
    marginBottom: 25,
  },
  pop_up_links: {
    color: '#63BEE1',
    paddingTop: 5,
  },
});

export default Home;
