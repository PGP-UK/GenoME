import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Section, Block, Grid } from 'react-native-responsive-layout';

import PageLayout from '../../../components/PageLayout';
import DataContext from '../../../Context/DataContext';
import HeaderRow from '../../../components/HeaderRow';
import { PageText } from '../../../components/Text'

import CenterSection from './CenterSection';
import GlobeImage from './GlobeImage';

const Ancestry = (props) => {
  const { route } = props;
  const { name } = route.params;
  const { ancestry: { AllAmbassadorsData } } = useContext(DataContext)
  const { data, image } = AllAmbassadorsData[name];

  return (
    <PageLayout>
      <HeaderRow headerText="Ancestry" backBtn />
      <PageText category="p1" style={styles.main_text}>
        Different populations have their own distinctive pattern of genetic
        variants. By comparing thousands of my variants with those of
        individuals from different populations, my ancestry can be predicted.
      </PageText>
      <CenterSection data={data} image={image} />
      <Grid stretchable>
        <Section stretch>
          <Block hidden xlVisible>
            <GlobeImage />
          </Block>
        </Section>
      </Grid>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  main_text: {
    marginBottom: 20,
  },
});


export default Ancestry;
