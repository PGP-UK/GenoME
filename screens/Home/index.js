import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

import { Section } from 'react-native-responsive-layout';
import PageLayout from '../../components/PageLayout';
import HeaderRow from './HeaderRow';
import Ambassadors from './Ambassadors';
import { PageText } from '../../components/Text';

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

        <Section
          stretch
          style={{
            alignItems: 'center',
            alignContent: 'center',
            paddingBottom: 50,
          }}>
          <Ambassadors navigation={navigation} />
        </Section>

        <Section style={{flex: 1,flexWrap: 'wrap-reverse'}}>
          <Text style={styles.footer_text}>
            Tap here to listen to 'GenoME' our ambassador's genetic code for their eye colour. {"\n"}
            'GenoME' was peformed by The Benyounes Quartet and composed by Deidre Gribbin.
          </Text>
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
  footer_text: {
    color: '#666E7A',
    fontSize: 25,
    paddingBottom: 50,
  },
});

export default Home;
