import React from 'react';
import { StyleSheet } from 'react-native';
import { Section, Block, Grid } from 'react-native-responsive-layout';

import PageLayout from '../../../components/PageLayout';
import HeaderRow from '../../../components/HeaderRow';
import { PageText } from '../../../components/Text';

import CenterSection from './CenterSection';
import GlobeImage from './GlobeImage';

const Ancestry = () => (
  <PageLayout>
    <HeaderRow goBackBtn displayAmbassadorSwitch>
      Ancestry
    </HeaderRow>
    <PageText category="p1" style={styles.main_text}>
      Different populations have their own distinctive pattern of genetic
      variants. By comparing thousands of my variants with those of
      individuals from different populations, my ancestry can be predicted.
    </PageText>
    <CenterSection />
    <Grid stretchable>
      <Section stretch>
        <Block hidden xlVisible>
          <GlobeImage />
        </Block>
      </Section>
    </Grid>
  </PageLayout>
)

const styles = StyleSheet.create({
  main_text: {
    marginBottom: 20,
  },
});

export default Ancestry;
