import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import PageLayout from '../../../components/PageLayout';

const Health = () => {
  return (
    <>
      <PageLayout>
        <Grid>
          <Section>
            <Block>
              <Text category="h1" style={styles.header}>
                Health
              </Text>
            </Block>
            <Block>
              <Text category="p1" style={styles.main_text}>
                Genetic makeup can also give inidications on inherited risks and
                general disease risks. Environmental factors can also have a
                bearing on these results.
              </Text>
              <Text category="p1" style={styles.main_text}>
                Just like everyone else, I have millions of single nucleotide
                variants (SNVs). These are positions in my DNA which differ
                between individuals. For the majority of my SNVs, their
                functions are not yet known. While some SNVs act individually to
                increase or reduce my risk for a given trait or disease, most
                act in groups together with environmental and other factors.
              </Text>
              <Text category="p1" style={styles.main_text}>
                Tap below to explore the frequency and risk associated with
                three of my SNVs.
              </Text>
            </Block>
          </Section>
        </Grid>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#63BEE1',
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 25,
  },
  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
  button_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Health;
